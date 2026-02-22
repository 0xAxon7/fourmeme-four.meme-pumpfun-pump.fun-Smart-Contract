use crate::errors::*;
use anchor_lang::{prelude::*, AnchorDeserialize, AnchorSerialize};
use core::fmt::Debug;

#[account]
#[derive(Debug)]
pub struct Config {
    pub authority: Pubkey,
    //  use this for meteora migration
    pub migration_authority: Pubkey,

    pub backend_sign_authority: Pubkey,

    pub team_wallet: Pubkey,
    pub team_wallet_secondary: Pubkey,
    pub migration_wallet: Pubkey,

    pub platform_buy_fee: u64, //  platform fee percentage for team_wallet
    pub platform_sell_fee: u64,
    pub platform_buy_fee_secondary: u64, //  platform fee percentage for team_wallet_secondary
    pub platform_sell_fee_secondary: u64,

    pub initialized: bool,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq, Debug)]
pub enum AmountConfig<T: PartialEq + PartialOrd + Debug> {
    Range { min: Option<T>, max: Option<T> },
    Enum(Vec<T>),
}

impl<T: PartialEq + PartialOrd + Debug> AmountConfig<T> {
    pub fn validate(&self, value: &T) -> Result<()> {
        match self {
            Self::Range { min, max } => {
                if let Some(min) = min {
                    if value < min {
                        return Err(ValueTooSmall.into());
                    }
                }
                if let Some(max) = max {
                    if value > max {
                        return Err(ValueTooLarge.into());
                    }
                }

                Ok(())
            }
            Self::Enum(options) => {
                if options.contains(value) {
                    Ok(())
                } else {
                    Err(ValueInvalid.into())
                }
            }
        }
    }
}
