// creator: 0xAxon7

import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers"
import { getImplementationAddressFromProxy } from "@openzeppelin/upgrades-core"
import { BigNumberish, ContractTransaction, ContractTransactionResponse, ethers } from "ethers"
import fs from "fs"
import hre from "hardhat"

export const writeAddr = (addressFile: string, network: string, addr: string, name: string) => {
	fs.appendFileSync(
		addressFile,
		`${name}: [https://${network}.etherscan.io/address/${addr}](https://${network}.etherscan.io/address/${addr})<br/>`
	)
}

export const verify = async (addr: string, args: any[], contract: any = undefined) => {
	try {
		await hre.run("verify:verify", {
			address: addr,
			constructorArguments: args,
			contract,
		})
	} catch (ex: any) {
		if (ex.toString().indexOf("Already Verified") == -1) {
			throw ex
		}
	}
}

export const verifyProxyImplementation = async (addr: string, contract: any = undefined) => {
	const implementationAddress = await getImplementationAddressFromProxy(hre.network.provider, addr)
	await verify(implementationAddress as string, [], contract)
}

export const verifyPulseContract = async (promise: Promise<any>) => {
	try {
		await promise
	} catch (error) {
		console.log(error)
	}
}

export const executeTx = async (contractFunctionCall: Promise<ContractTransactionResponse>) => {
	const tx = await contractFunctionCall
	await tx.wait()
	return tx
}

export const replaceTx = async (wallet: SignerWithAddress, nonce: number) => {
	const tx = await wallet.sendTransaction({
		from: wallet.address,
		to: wallet.address,
		value: ethers.parseEther("0"),
		nonce,
	})
	await tx.wait()
	console.log("replaced")
}

export const toFloat = (value: BigNumberish | string) => {
	return Number(ethers.formatEther(value))
}

export const toSwapTokens = (tokens: { name: string; decimal: number; tokenAddress: string, isStable?: boolean }[]) => {
	const defaultConfig = {
		isEnabled: true,
		price: 0,
		isStable: false,
	}
	const tokenConfigs = tokens.map((item) => ({ ...defaultConfig, ...item }))
	return tokenConfigs
}

export const waitFor = async (secs: number) => {
	console.log(`waiting for ${secs} seconds`);
	await new Promise((resolve) => setTimeout(resolve, secs * 1000));
}