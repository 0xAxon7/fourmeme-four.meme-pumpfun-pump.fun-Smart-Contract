use anchor_lang::prelude::*;
pub mod constants;
pub mod errors;
pub mod events;
pub mod instructions;
pub mod state;
pub mod utils;

use instructions::{configure::*, create_bonding_curve::*, create_pool::*, lock_pool::*, swap::*};
use state::config::*;

declare_id!("9s5i8n2dJPFpbmt55N7zop2iu8FTQ9TQjUXmfpNnzZYs");

#[program]
pub mod pump_meteora {
    use super::*;

    pub fn configure(ctx: Context<Configure>, new_config: Config) -> Result<()> {
        ctx.accounts.handler(new_config, ctx.bumps.config)
    }

    pub fn create_bonding_curve(
        ctx: Context<CreateBondingCurve>,

        // bonding curve config
        decimals: u8,
        token_supply: u64,

        //bonding curve info
        initial_meteora_token_reserves: u64,
        initial_meteora_sol_amount: u64,

        final_price: f64,
        start_price: f64,
        initial_real_token_reserves: u64,

        //  metadata
        name: String,
        symbol: String,
        uri: String,
    ) -> Result<()> {
        ctx.accounts.handler(
            //launch config
            decimals,
            token_supply,
            //bonding curve info
            initial_meteora_token_reserves,
            initial_meteora_sol_amount,
            final_price,
            start_price,
            initial_real_token_reserves,
            //metadata
            name,
            symbol,
            uri,
            ctx.bumps.global_vault,
        )
    }

    pub fn swap(
        ctx: Context<Swap>,
        amount: u64,
        direction: u8,
        minimum_receive_amount: u64,
    ) -> Result<()> {
        ctx.accounts.handler(
            amount,
            direction,
            minimum_receive_amount,
            ctx.bumps.global_vault,
        )
    }

    pub fn create_pool(ctx: Context<InitializePoolWithConfig>) -> Result<()> {
        instructions::initialize_pool_with_config(ctx)
    }

    pub fn lock_pool(ctx: Context<LockPool>) -> Result<()> {
        instructions::lock_pool(ctx)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
