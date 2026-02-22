use anchor_lang::prelude::*;

#[event]
pub struct LaunchEvent {
    pub creator: Pubkey,
    pub mint: Pubkey,
    pub bonding_curve: Pubkey,
    pub metadata: Pubkey,

    pub decimals: u8,
    pub token_supply: u64,

    pub reserve_lamport: u64,
    pub reserve_token: u64,
}

#[event]
pub struct SwapEvent {
    pub user: Pubkey,
    pub mint: Pubkey,
    pub bonding_curve: Pubkey,

    pub sol_amount: u64,
    pub token_amount: u64,
    pub platform_fee_lamports: u64,
    pub platform_fee_secondary_lamports: u64,

    pub direction: u8,
    pub timestamp: i64,

    pub real_sol_reserves: u64,
    pub real_token_reserves: u64,
}

#[event]
pub struct CompleteEvent {
    pub user: Pubkey,
    pub mint: Pubkey,
    pub bonding_curve: Pubkey,
}
