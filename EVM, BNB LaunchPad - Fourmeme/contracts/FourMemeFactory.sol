// SPDX-License-Identifier: MIT
// EVM, BNB LaunchPad - Fourmeme smart contract | forked and customized Fourmeme smart contract, Fourmeme + pancakeswap cpi for Fourmeme fork, uniswap v3 + evm launchpad cpi for xpad fork
// **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)
pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

import "./FourMemeToken.sol";

interface IUniswapV2Router02 {
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    )
        external
        payable
        returns (uint amountToken, uint amountETH, uint liquidity);

    function WETH() external view returns (address);

    function factory() external view returns (address);
}

interface IUniswapV2Factory02 {
    function getPair(
        address tokenA,
        address tokenB
    ) external view returns (address pair);
}

interface IERC20 {
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

contract PumpCloneFactory is
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    struct TokenInfo {
        address creator;
        address tokenAddress;
        uint256 vReserveEth;
        uint256 vReserveToken;
        uint256 rReserveEth;
        uint256 rReserveToken;
        uint256 vLastReserveEth;
        uint256 vLastReserveToken;
        uint256 migrationPlatformFee;
        uint256 totalSupply;
        bool liquidityMigrated;
    }

    mapping(address => TokenInfo) public tokens;

    address public uniswapRouter;
    address public WETH;
    address public fourMemeTokenImplementation;
    address public platformWallet;
    address public treasuryWallet;

    uint256 public V_ETH_RESERVE;
    uint256 public V_TOKEN_RESERVE;
    uint256 public R_TOKEN_RESERVE;
    uint256 public TOTAL_SUPPLY;
    uint256 public TRADE_FEE_BPS;
    uint256 public BPS_DENOMINATOR;
    uint256 public LIQUIDITY_MIGRATION_PLATFORM_FEE_BPS;
    uint256 public LIQUIDITY_MIGRATION_LOTTERY_FEE_BPS;
    uint256 public totalFee;
    uint256 public UNISWAP_ETH_AMOUNT;
    uint256 public UNISWAP_MAX_FEE_BPS;
    uint256 public UNISWAP_TREASURY_FEE_BPS;
    uint256 public BUNDLE_BUY_LIMIT;

    event TokenLaunched(
        address indexed token,
        string name,
        string symbol,
        address indexed creator,
        uint256 virtualEthReserves,
        uint256 virtualTokenReserves,
        uint256 totalSupply,
        uint256 autoBuyAmount,
        address pair
    );
    event LiquiditySwapped(
        address indexed token,
        uint256 tokenAmount,
        uint256 ethAmount,
        uint256 virtualEthReserves,
        uint256 virtualTokenReserves
    );
    event Trade(
        address indexed mint,
        uint256 ethAmount,
        uint256 tokenAmount,
        bool isBuy,
        address indexed user,
        uint256 timestamp,
        uint256 virtualEthReserves,
        uint256 virtualTokenReserves,
        uint256 totalSupply
    );

    event ParamsUpdated(
        string indexed what,
        uint256 firstParam,
        uint256 secondParam,
        uint256 thirdParam
    );

    event ParamsUpdatedTreasury(string indexed what, address indexed treasury);

    event UpdateTokenImpl(string indexed what, address indexed newTokenImpl);

    event DebugUint(string message, uint256 value);

    event MigrationFinalized(address indexed token, address indexed caller);

    event LPBurned(
        address indexed token,
        address indexed pair,
        uint256 lpAmount
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address _router,
        address _pumpTokenImplementation
    ) public initializer {
        require(_router != address(0), "Router cannot be zero address");
        require(
            _pumpTokenImplementation != address(0),
            "Pump token implementation cannot be zero address"
        );

        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        __ReentrancyGuard_init();

        uniswapRouter = _router;
        WETH = IUniswapV2Router02(_router).WETH();
        pumpTokenImplementation = _pumpTokenImplementation;

        V_ETH_RESERVE = 105 ether / 100;
        V_TOKEN_RESERVE = 1000000000 ether;
        R_TOKEN_RESERVE = 800000000 ether;
        TRADE_FEE_BPS = 100; // 1% fee in basis points
        BPS_DENOMINATOR = 10000;
        LIQUIDITY_MIGRATION_PLATFORM_FEE_BPS = 200; // 2% fee for liquidity migration
        TOTAL_SUPPLY = 1000000000 ether; // 1 billion tokens
        UNISWAP_ETH_AMOUNT = 4 ether; //mainnet: 4 ether; // 4 ETH for initial liquidity
        treasuryWallet = 0x0000000000000000000000000000000000000000; // set to your treasury wallet
        UNISWAP_MAX_FEE_BPS = 1000;
        UNISWAP_TREASURY_FEE_BPS = 2000;
        BUNDLE_BUY_LIMIT = 1 ether / 10;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    function launchFourMemeToken(
        string memory _name,
        string memory _symbol,
        uint256 _creatorTaxFee,
        bytes32 _fourMeme
    ) external payable nonReentrant {
        if (msg.value > 0)
            require(
                msg.value >= BUNDLE_BUY_LIMIT,
                "Bundle buy amount under limit"
            );

        _launchTokenWithFourMeme(
            _name,
            _symbol,
            _creatorTaxFee,
            _fourMeme,
            msg.value
        );
    }

    function _launchTokenWithFourMeme(
        string memory _name,
        string memory _symbol,
        uint256 _creatorTaxFee,
        bytes32 _fourMeme,
        uint256 ethAmount
    ) internal {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_symbol).length > 0, "Symbol cannot be empty");
        require(_creatorTaxFee <= UNISWAP_MAX_FEE_BPS, "Exceeds max fee limit");

        // Create FourMemeToken

        // Initialize FourMemeToken

        emit TokenLaunched(
            fourMemeToken,
            _name,
            _symbol,
            msg.sender,
            info.vReserveEth,
            info.vReserveToken,
            info.totalSupply,
            ethAmount,
            pair
        );
    }

    function _calculateReserveAfterBuy(
        uint256 reserveEth,
        uint256 reserveToken,
        uint256 ethIn
    ) internal pure returns (uint256, uint256) {
        // Calculate new reserves after buy
        return (newReserveEth, newReserveToken);
    }

    function buyToken(
        address _token,
        uint256 minTokensOut
    ) external payable nonReentrant {
        require(msg.value > 0, "No ETH sent");
        _buyToken(_token, minTokensOut, msg.value, false);
    }

    function _buyToken(
        address _token,
        uint256 minTokensOut,
        uint256 ethAmount,
        bool isBundle
    ) internal {
        require(ethAmount > 0, "ETH amount must be > 0");

        TokenInfo storage info = tokens[_token];
        require(info.tokenAddress != address(0), "Invalid token");
        require(!info.liquidityMigrated, "Trading moved to Uniswap");
        require(TRADE_FEE_BPS < BPS_DENOMINATOR, "Invalid fee config");

        // ===== Effects first =====
        // calculate new reserves after buy

        // ===== Interactions =====
        // token transfer to msg.sender

        // Perform refund early to minimize holding excess funds

        // Auto-migrate liquidity if reserve empty
        if (info.rReserveToken == 0) {
            info.liquidityMigrated = true;
        }
    }

    function sellToken(
        address _token,
        uint256 tokenAmount,
        uint256 slippageAmount
    ) external nonReentrant {
        // sell token

        // eth transfer to msg.sender

        // fee transfer to treasury wallet

        emit Trade(
            _token,
            netEthOut,
            tokenAmount,
            false,
            msg.sender,
            block.timestamp,
            info.vReserveEth,
            info.vReserveToken,
            info.totalSupply
        );
    }

    function _addLiquidityToUniswap(address _token) internal {
        // check the bondingcurve status

        // add liquidity

        // reset approve (optional)

        // Get LP pair address for token + WETH

        // Burn LP tokens if contract received any

        emit LiquiditySwapped(
            _token,
            tokenAmount,
            UNISWAP_ETH_AMOUNT,
            info.vReserveEth,
            info.vReserveToken
        );
    }

    function _burnLiquidity(address _token) internal {
        // burn lp tokens
        emit LPBurned(_token, pair, lpBalance);
    }

    function updateReserves(
        uint256 _vEthReserve,
        uint256 _vTokenReserve,
        uint256 _rTokenReserve
    ) external onlyOwner {
        require(_vEthReserve > 0, "Virtual ETH reserve must be positive");
        require(_vTokenReserve > 0, "Virtual token reserve must be positive");
        require(_rTokenReserve > 0, "Real token reserve must be positive");
        require(
            _rTokenReserve <= _vTokenReserve,
            "Real reserve cannot exceed virtual"
        );

        emit ParamsUpdated(
            "reserves",
            _vEthReserve,
            _vTokenReserve,
            _rTokenReserve
        );
    }

    function updateFeeRate(uint256 value) external onlyOwner {
        TRADE_FEE_BPS = value;
        emit ParamsUpdated("tradeFee", value, 0, 0);
    }

    function updateBundleBuyLimit(uint256 value) external onlyOwner {
        BUNDLE_BUY_LIMIT = value;
        emit ParamsUpdated("bundleBuyLimit", value, 0, 0);
    }

    function updateLiquidityMigrationFeeRate(
        uint256 value,
        uint256 _value
    ) external onlyOwner {
        LIQUIDITY_MIGRATION_PLATFORM_FEE_BPS = value;
        emit ParamsUpdated("migrateFee", value, 0, 0);
    }

    function updateUniswapMaxFeeRate(uint256 value) external onlyOwner {
        UNISWAP_MAX_FEE_BPS = value;
        emit ParamsUpdated("uniswapMaxFee", value, 0, 0);
    }

    function updateUniswapEthAmount(uint256 value) external onlyOwner {
        UNISWAP_ETH_AMOUNT = value;
        emit ParamsUpdated("uniswapEthAmount", value, 0, 0);
    }

    function updateTreasuryWallet(address value) external onlyOwner {
        require(value != address(0), "Treasury cannot be zero address");
        treasuryWallet = value;
        emit ParamsUpdatedTreasury("treasuryWallet", treasuryWallet);
    }

    function updateFourMemeTokenImplementationAddress(
        address value
    ) external onlyOwner {
        require(value != address(0), "Implementation cannot be zero address");
        pumpTokenImplementation = value;
        emit UpdateTokenImpl(
            "newTokenImplAddress",
            fourMemeTokenImplementation
        );
    }

    function finalizeMigration(address _token) external onlyOwner {
        TokenInfo storage info = tokens[_token];
        require(info.liquidityMigrated, "Migration not done");
        // call token renounce from factory

        emit MigrationFinalized(_token, msg.sender);
    }

    // External wrapper to call your internal LP burn function
    function burnLiquidity(address _token) external onlyOwner {
        _burnLiquidity(_token);
    }

    receive() external payable {}
}
