// creator: 0xAxon7
// EVM, BNB LaunchPad - Fourmeme smart contract | forked and customized Fourmeme smart contract, Fourmeme + pancakeswap cpi for Fourmeme fork, uniswap v3 + evm launchpad cpi for xpad fork
// **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)
import { ethers, upgrades } from "hardhat"
import hre from "hardhat"

async function main() {
	console.log("Starting deployments")
	const accounts = await hre.ethers.getSigners();
	const deployer = accounts[0];

	//  devnet: "0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3" mainnet: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
	const routerAddress = "0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3";
	const FourMemeFactory = await ethers.getContractFactory("FourMemeFactory");
	const FourMemeToken = await ethers.getContractFactory("FourMemeToken");

	//// Token Implementation deploy
	console.log("Token Implementation deploy start")
	const fourMemeTokenImpl = await FourMemeToken.deploy();
	await fourMemeTokenImpl.waitForDeployment();
	const fourMemeTokenImplAddress = await fourMemeTokenImpl.getAddress();
	console.log("FourMemeToken implementation deployed at:", fourMemeTokenImplAddress);

	//// UUPS proxy FourMemeFactory deploy
	console.log("Factory contract deploy")
	const fourMemeFactory = await upgrades.deployProxy(FourMemeFactory, [routerAddress, fourMemeTokenImplAddress], {
		initializer: "initialize",
		kind: "uups",
	});
	await fourMemeFactory.waitForDeployment();
	const fourMemeFactoryAddress = await FourMemeFactory.getAddress();
	console.log("FourMemeFactory deployed to:", fourMemeFactoryAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
