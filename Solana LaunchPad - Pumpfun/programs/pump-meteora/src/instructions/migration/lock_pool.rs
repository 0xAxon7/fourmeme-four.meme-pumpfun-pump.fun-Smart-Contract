use crate::constants::*;
use crate::errors::ContractError;
use crate::state::{bondingcurve::*,config::*};
use crate::state::meteora::{get_function_hash, get_lock_lp_ix_data};
use anchor_lang::prelude::*;
use anchor_lang::solana_program::{instruction::Instruction, program::invoke_signed};
use anchor_spl::{associated_token, token::TokenAccount};
use anchor_spl::token:: Mint;
use std::str::FromStr;

#[derive(Accounts)]
pub struct LockPool<'info> {
    #[account(
        seeds = [CONFIG.as_bytes()],
        bump,
    )]
    global_config: Box<Account<'info, Config>>,
  
    #[account(
        mut,
        seeds = [BONDING_CURVE.as_bytes(), &token_mint.key().to_bytes()], 
        bump
    )]
    bonding_curve: Account<'info, BondingCurve>,

    pub token_mint: Box<Account<'info, Mint>>,

    /// CHECK: global vault pda which stores SOL
    #[account(
        mut,
        seeds = [GLOBAL.as_bytes()],
        bump,
    )]
    pub global_vault: AccountInfo<'info>,

    #[account(mut)]
    /// CHECK: Pool account (PDA address)
    pub pool: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: lp mint
    pub lp_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Token A LP
    pub a_vault_lp: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Token A LP
    pub b_vault_lp: UncheckedAccount<'info>,

    /// CHECK: Token B mint
    pub token_b_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault accounts for token A
    pub a_vault: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault accounts for token B
    pub b_vault: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault LP accounts and mints for token A
    pub a_vault_lp_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault LP accounts and mints for token B
    pub b_vault_lp_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Accounts to bootstrap the pool with initial liquidity
    pub payer_pool_lp: Box<Account<'info, TokenAccount>>,

    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut)]
    pub authority: Signer<'info>,

    /// CHECK: should be same with the address in the global_config
    #[account(
        mut,
        constraint = global_config.migration_wallet == fee_receiver.key() @ContractError::IncorrectAuthority
    )]
    pub fee_receiver: AccountInfo<'info>,

    /// CHECK: should be same with the address in the bonding_curve
    #[account(
        mut,
        constraint = bonding_curve.creator == creator_receiver.key() @ContractError::IncorrectAuthority
    )]
    pub creator_receiver: AccountInfo<'info>,

    /// CHECK: Token program account
    pub token_program: UncheckedAccount<'info>,
    /// CHECK: Associated token program account
    pub associated_token_program: UncheckedAccount<'info>,
    /// CHECK: System program account
    pub system_program: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK lock escrow
    pub lock_escrow: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK lock escrow
    pub lock_escrow1: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Escrow vault
    pub escrow_vault: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Escrow vault
    pub escrow_vault1: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK:
    pub meteora_program: AccountInfo<'info>,

    /// CHECK: Meteora Event Autority
    pub event_authority: AccountInfo<'info>,
}

pub fn lock_pool(ctx: Context<LockPool>) -> Result<()> {
    // solana pumpfun(pump.fun, pump fun) smart contract | forked and customized pumpfun(pump.fun, pump fun) smart contract, pumpfun(pump.fun, pump fun) + raydium cpi for pumpfun(pump.fun, pump fun) fork, pumpfun(pump.fun, pump fun) + meteora cpi for pumpfun(pump.fun, pump fun) fork, token 2022
    // **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)
    
    Ok(())
}
