// creator: 0xAxon7
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz",
      accounts: [PRIVATE_KEY],
      chainId: 10143,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/0ca42530efa6e114e6264b2c01e55131ce52d2d3",
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    ethereum: {
      url: "https://ethereum-rpc.publicnode.com",
      accounts: [PRIVATE_KEY],
      chainId: 1,
    },
    bnbtestnet: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
    bnbmainnet: {
      url: "https://bsc-mainnet.publicnode.com",
      accounts: [PRIVATE_KEY],
      chainId: 56,
    },
  },

  etherscan: {
    apiKey: "ABFGJ8QY53DM218T42KGI2KI9TQUHN8I6Z",
    enabled: true,
  },

  sourcify: {
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com",
    enabled: false,
  },
  solidity: {
    version: "0.8.28",
    settings: {
      viaIR: true,
      metadata: {
        bytecodeHash: "none", // disable ipfs
        useLiteralContent: true, // use source code
      },
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
};
export default config;
