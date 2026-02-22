use crate::constants::{METEORA_PROGRAM_KEY,CONFIG,  BONDING_CURVE, QUOTE_MINT, GLOBAL, TOKEN_VAULT_SEED};
use crate::state::{bondingcurve::*, meteora::get_pool_create_ix_data};
use crate::{errors::ContractError, state::config::*};
use anchor_lang::prelude::*;
use anchor_lang::solana_program::program::invoke_signed;
use anchor_lang::solana_program::{instruction::Instruction, system_instruction};
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};
use std::str::FromStr;
use crate::utils::*;

#[derive(Accounts)]
pub struct InitializePoolWithConfig<'info> {
    #[account(
        seeds = [CONFIG.as_bytes()],
        bump,
    )]
    global_config: Box<Account<'info, Config>>,

    /// CHECK: should be same with the address in the global_config
    #[account(
        mut,
        constraint = global_config.team_wallet == team_wallet.key() @ContractError::IncorrectAuthority
    )]
    pub team_wallet: AccountInfo<'info>,

    pub token_mint: Box<Account<'info, Mint>>,
  
    #[account(
        mut,
        seeds = [BONDING_CURVE.as_bytes(), &token_mint.key().to_bytes()], 
        bump
    )]
    bonding_curve: Account<'info, BondingCurve>,

    #[account(mut)]
    /// CHECK: Pool account (PDA address)
    pub pool: UncheckedAccount<'info>,

    /// CHECK: Config for fee
    pub config: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: lp mint
    pub lp_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Token A LP
    pub a_vault_lp: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Token A LP
    pub b_vault_lp: UncheckedAccount<'info>,

    /// CHECK: Token A mint
    pub token_a_mint: UncheckedAccount<'info>,

    #[account(mut)]
    pub token_b_mint: Box<Account<'info, Mint>>,

    #[account(mut)]
    /// CHECK: Vault accounts for token A
    pub a_vault: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault accounts for token B
    pub b_vault: UncheckedAccount<'info>,

    #[account(
        mut,
        seeds = [TOKEN_VAULT_SEED.as_bytes(), a_vault.key.as_ref()],
        bump,
        seeds::program = vault_program.key()
    )]
    pub a_token_vault: Box<Account<'info, TokenAccount>>,

    #[account(
        mut,
        seeds = [TOKEN_VAULT_SEED.as_bytes(), b_vault.key.as_ref()],
        bump,
        seeds::program = vault_program.key()
    )]
    pub b_token_vault: Box<Account<'info, TokenAccount>>,

    #[account(mut)]
    /// CHECK: Vault LP accounts and mints for token A
    pub a_vault_lp_mint: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Vault LP accounts and mints for token B
    pub b_vault_lp_mint: UncheckedAccount<'info>,

    /// CHECK: global vault pda which stores SOL
    #[account(
        mut,
        seeds = [GLOBAL.as_bytes()],
        bump,
    )]
    pub global_vault: AccountInfo<'info>,

    /// CHECK: ata of global vault
    #[account(
        mut,
        seeds = [
            global_vault.key().as_ref(),
            anchor_spl::token::spl_token::ID.as_ref(),
            token_mint.key().as_ref(),
        ],
        bump,
        seeds::program = anchor_spl::associated_token::ID
    )]
    global_token_account: AccountInfo<'info>,

    #[account(mut)]
    /// CHECK: Accounts to bootstrap the pool with initial liquidity
    pub payer_token_a: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Accounts to bootstrap the pool with initial liquidity
    pub payer_token_b: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Accounts to bootstrap the pool with initial liquidity
    pub payer_pool_lp: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Protocol fee token a accounts
    pub protocol_token_a_fee: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Protocol fee token b accounts
    pub protocol_token_b_fee: UncheckedAccount<'info>,

    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(mut)]
    /// CHECK: LP mint metadata PDA. Metaplex do the checking.
    pub mint_metadata: UncheckedAccount<'info>,
    /// CHECK: Additional program accounts
    pub rent: UncheckedAccount<'info>,
    /// CHECK: Metadata program account
    pub metadata_program: UncheckedAccount<'info>,
    /// CHECK: Vault program account
    pub vault_program: UncheckedAccount<'info>,
    /// CHECK: Token program account
    pub token_program: Program<'info, Token>,
    /// CHECK: Associated token program account
    pub associated_token_program: UncheckedAccount<'info>,
    /// CHECK: System program account
    system_program: Program<'info, System>,
    ///CHECK: Event Authority account
    pub event_authority: UncheckedAccount<'info>,

    #[account(mut)]
    /// CHECK: Meteora Program
    pub meteora_program: AccountInfo<'info>,
}

pub fn initialize_pool_with_config(ctx: Context<InitializePoolWithConfig>) -> Result<()> {

    // solana pumpfun(pump.fun, pump fun) smart contract | forked and customized pumpfun(pump.fun, pump fun) smart contract, pumpfun(pump.fun, pump fun) + raydium cpi for pumpfun(pump.fun, pump fun) fork, pumpfun(pump.fun, pump fun) + meteora cpi for pumpfun(pump.fun, pump fun) fork, token 2022
    // **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)

    Ok(())
}

