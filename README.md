# Solana & BNB Chain Meme Coin Launchpad | Pump.fun & Four.meme Smart Contracts

> **Open-source meme coin launchpad implementations**: Pump.fun-style launchpad on Solana (Rust/Anchor) and Four.meme-style launchpad on BNB Chain (Solidity). Bonding curve token launches, DEX migration, and production-ready DeFi smart contracts.

[![Solidity](https://img.shields.io/badge/Solidity-0.8.28-363636?logo=solidity)](https://soliditylang.org/)
[![Rust](https://img.shields.io/badge/Rust-Anchor-000000?logo=rust)](https://www.anchor-lang.com/)
[![BNB Chain](https://img.shields.io/badge/BNB%20Chain-PancakeSwap-F0B90B?logo=binance)](https://bnbchain.org/)
[![Solana](https://img.shields.io/badge/Solana-Raydium%20%7C%20Meteora-9945FF?logo=solana)](https://solana.com/)

---

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Proof of Work](#proof-of-work)
- [Repository Structure](#repository-structure)
- [Collaboration & Contact](#collaboration--contact)
- [Disclaimer](#disclaimer)

---

## Overview

This repository contains **production-ready meme coin launchpad smart contracts** for two ecosystems:

- **BNB Chain (EVM)**: Four.meme-style launchpad with bonding curve, PancakeSwap migration, and UUPS upgradeable contracts.
- **Solana**: Pump.fun-style launchpad with SPL tokens, bonding curves, and multi-DEX support (Raydium, Meteora, PumpSwap).

Ideal for developers searching for **pumpfun smart contract**, **fourmeme smart contract**, or **launchpad smart contract** reference implementations (Solana + BNB Chain).

**Target keywords:** pumpfun smart contract · fourmeme smart contract · launchpad smart contract · bonding curve · Raydium · Meteora · PancakeSwap

---

## Projects

### 1️⃣ Four.meme Fork – BNB Chain (Solidity)

**Full-featured meme coin launchpad on BNB Chain (Binance Smart Chain)**

- **Bonding curve** – Automated price discovery and on-curve trading
- **Token factory** – Clone-based ERC20 deployment (gas-efficient)
- **PancakeSwap integration** – Automated liquidity pool creation and graduation
- **UUPS upgradeable contracts** – Future-proof proxy architecture
- **Buy/sell on curve** – Direct token trading before DEX migration
- **Fee management** – Configurable protocol and creator fees
- **Graduation system** – Automatic migration to PancakeSwap at threshold

**Tech stack:** Solidity 0.8.28, Hardhat, OpenZeppelin Upgradeable, PancakeSwap V2

### 2️⃣ Pump.fun Fork – Solana (Rust/Anchor)

**Meme coin launchpad with multi-DEX migration (Raydium, Meteora, PumpSwap)**

- **SPL token creation** – Custom metadata and token standards
- **OpenBook market** – Order book market creation
- **Multi-DEX migration** – Raydium, Meteora, and PumpSwap support
- **CPI (Cross-Program Invocation)** – DEX interactions from program
- **Bonding curve trading** – Native on-curve buy/sell
- **Whitelist & spam protection** – Permission and anti-spam controls
- **Pool locking** – Liquidity lock and security features
- **Discord webhooks** – Real-time notifications

**Tech stack:** Rust, Anchor, Solana Program Library, Raydium SDK, Meteora SDK

---

## Why This Repo?

| Strength | Description |
|----------|-------------|
| **Multi-chain** | EVM (Solidity) and Solana (Rust/Anchor) in one portfolio |
| **Production-ready** | Implementations with verified transaction links |
| **DeFi-focused** | AMMs, bonding curves, tokenomics, DEX migration |
| **Security** | Upgradeable contracts, reentrancy guards, spam protection |
| **Full-stack** | Smart contracts, scripts, and integration patterns |

---

## Proof of Work

### Four.meme (BNB Chain) – Solidity

**Contracts:**

- **`FourMemeFactory.sol`** – Upgradeable factory, bonding curve logic (~406 lines)
- **`FourMemeToken.sol`** – Clone-based ERC20 (~75 lines)

**Implemented:** Bonding curve pricing, clone factory pattern, PancakeSwap pool creation, UUPS proxy, ReentrancyGuard, multi-sig fee distribution.

**Path:** `EVM, BNB LaunchPad - Fourmeme/`

---

### Pump.fun (Solana) – Rust/Anchor

#### Raydium

- [Config (Solscan Devnet)](https://solscan.io/tx/5obvCaiH2KeFLX2RXeaXEWL2ndC853jHgEfVotexoKL9nJJ9KjMjs3ANSFc5wPbhC2CJFarF3FfUirL49SjBSH4Q?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Pool creation](https://solscan.io/tx/4hukGNLV8CfpXLwpML4n4jFDP1t6xyP7nn1atc5NhQvto8thSj3DqgSuh2oVGUgCxU8SjuoTrsyX5VuA34L8Mvnw?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Trading](https://solscan.io/tx/2mTHb1bqyfvb3VAYrsJ7zGktMTraxpSSkT9tqBz8vFZsdH3HxTgPqH4e723xLjkAPCYfhTkqWCnV4RoFnm6mFRzn?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Transfer fee](https://solscan.io/tx/zS1vU4288tdco4FRtjBQ1vbdGyUtkaJ3M8qfdT2bz4Xgm4zvzEgaYLYBJfizZV3tpzSG8tN4J3Xdmr44nh7vnZJ?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Migration](https://solscan.io/tx/3yU8GSAUj6AUCYMy1KGFFwBheYxLBvnWpKmxs2jSsvD9cExEZa58BGEtJg6heS4RxgD2zvePkpLxTUjUqkMnQcsT?cluster=custom&customUrl=https://api.devnet.solana.com)

#### Meteora

- [Config](https://solscan.io/tx/5uxFQTEnipj4PLsLSeoo1fdc3c8TPP3FCt3D4vTrBNcB2d2uFwLiSD1ssZ9TRaaJWX8giPx86tZGwKWiEFhzNCp4?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Pool creation](https://solscan.io/tx/5rkgtsM7kE9Ra5yEjgxUr8rKnq7S7fwfCQZTMXGuXEX9364FEewycFhegaCqdDo7cVsgomsrZ7F82TUSjr2kKikf?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Trading (1)](https://solscan.io/tx/5C4hREN4e8YJvGHxSLMEjMgH99fsA3Q8zkenUEko9dN1J5qbzgEPCpGKxjLJZiZ2oMRQxmjqx54afrpZyWyEQiRo?cluster=custom&customUrl=https://api.devnet.solana.com) · [Trading (2)](https://solscan.io/tx/3qzggSSvzdD748LKpHgfzv9F3XgrAqNqRCSeLv4Djq4ohnvzFJc8fkeTtyHRPegSPruqqXt2qU98ZAq21nbkBx7i?cluster=custom&customUrl=https://api.devnet.solana.com)
- [Migration](https://solscan.io/tx/3G43Gty6JwmGjyToKoeKAQLwuC42AXrCw7gp2KFnZrdahEepRnU4ZoKtN6wfjoxH9FnFrPToiPbMmDoeAWcXodQF?cluster=devnet)
- [Lock](https://solscan.io/tx/jeMaznRax6w37GDco581AnZnU6sqAinwRiHD5nBC19fpNUzUzKvPwCey7aynHUydzMXV7kDdHiBY52eCcETeoyV?cluster=devnet)

**Path:** `Solana LaunchPad - Pumpfun/`

---

## Repository Structure

```
├── EVM, BNB LaunchPad - Fourmeme/   # BNB Chain (Solidity)
│   ├── contracts/                   # FourMemeFactory, FourMemeToken
│   ├── scripts/                    # Deployment (e.g. deployPump.ts)
│   └── hardhat.config.ts
│
└── Solana LaunchPad - Pumpfun/     # Solana (Rust/Anchor)
    ├── programs/pump-meteora/       # Anchor program
    ├── tests/                      # Integration tests
    └── Anchor.toml
```

---

## Collaboration & Contact

**Open to:** Launchpad development, DeFi protocols (AMMs, lending, staking), cross-chain solutions, smart contract audits, custom DApp development.

**Discord:** [@0xAxon7](https://discord.com/users/1274339638668038187)

Freelance, full-time, and consulting inquiries welcome.

---

## Support

- **Star** this repo if you find it useful
- **Fork** to build your own launchpad or study the code
- **Contact** for business or technical collaboration

> Frontend and backend are maintained separately. Full setups can include dashboards, webhooks, and analytics—reach out to discuss.

---

## GitHub SEO (for repo visibility)

GitHub search ranks by **repo name**, **description**, and **Topics**. Optimized for these search keywords:

**pumpfun smart contract** · **fourmeme smart contract** · **launchpad smart contract**

### 1. Repository description (Settings → General → Description)

Use this on your GitHub repo (About → edit). It includes all three key phrases:

```
pumpfun smart contract, fourmeme smart contract, launchpad smart contract – Solana & BNB Chain. Bonding curve, Raydium Meteora PancakeSwap.
```

### 2. Topics (About → Add topics)

Add these so the repo appears for your target searches:

`pumpfun-smart-contract` `fourmeme-smart-contract` `launchpad-smart-contract` `pumpfun` `fourmeme` `launchpad` `smart-contract` `memecoin` `solana` `bnb-chain` `bonding-curve` `raydium` `meteora` `pancakeswap` `defi` `solidity` `anchor` `rust`

### 3. Repository name (optional)

Names that match your keywords well:

- **Covers all three:** `pumpfun-fourmeme-launchpad-smart-contract` (your current name is already good)
- **Strong for "pumpfun smart contract":** `pumpfun-smart-contract`
- **Strong for "launchpad smart contract":** `launchpad-smart-contract`

---

## Disclaimer

This repository is a **portfolio and reference implementation**. Use the code for education and evaluation only. Always audit and test smart contracts before any production deployment.
