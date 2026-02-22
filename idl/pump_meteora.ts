/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/pump_meteora.json`.
 */
export type PumpMeteora = {
  "address": "9bVkZJbAVqDxdpym6toss1rPBJ3B9ZqiEHWDgT6gu3gx",
  "metadata": {
    "name": "pumpMeteora",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "configure",
      "discriminator": [
        245,
        7,
        108,
        117,
        95,
        196,
        54,
        217
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "globalVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "globalWsolAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "globalVault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "nativeMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "nativeMint",
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "newConfig",
          "type": {
            "defined": {
              "name": "config"
            }
          }
        }
      ]
    },
    {
      "name": "createBondingCurve",
      "discriminator": [
        94,
        139,
        158,
        50,
        69,
        95,
        8,
        45
      ],
      "accounts": [
        {
          "name": "globalConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "globalVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "token",
          "writable": true,
          "signer": true
        },
        {
          "name": "bondingCurve",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  95,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "token"
              }
            ]
          }
        },
        {
          "name": "tokenMetadataAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "const",
                "value": [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ]
              },
              {
                "kind": "account",
                "path": "token"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ]
            }
          }
        },
        {
          "name": "globalTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "globalVault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "token"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "mplTokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "teamWallet",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "tokenSupply",
          "type": "u64"
        },
        {
          "name": "initialVirtualTokenReserves",
          "type": "u64"
        },
        {
          "name": "initialVirtualSolReserves",
          "type": "u64"
        },
        {
          "name": "initialRealTokenReserves",
          "type": "u64"
        },
        {
          "name": "initialMeteoraTokenReserves",
          "type": "u64"
        },
        {
          "name": "initialMeteoraSolAmount",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPool",
      "discriminator": [
        233,
        146,
        209,
        142,
        207,
        104,
        64,
        188
      ],
      "accounts": [
        {
          "name": "globalConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "teamWallet",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "bondingCurve",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  95,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "config"
        },
        {
          "name": "lpMint",
          "writable": true
        },
        {
          "name": "aVaultLp",
          "writable": true
        },
        {
          "name": "bVaultLp",
          "writable": true
        },
        {
          "name": "tokenAMint"
        },
        {
          "name": "tokenBMint",
          "writable": true
        },
        {
          "name": "aVault",
          "writable": true
        },
        {
          "name": "bVault",
          "writable": true
        },
        {
          "name": "aTokenVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "aVault"
              }
            ],
            "program": {
              "kind": "account",
              "path": "vaultProgram"
            }
          }
        },
        {
          "name": "bTokenVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bVault"
              }
            ],
            "program": {
              "kind": "account",
              "path": "vaultProgram"
            }
          }
        },
        {
          "name": "aVaultLpMint",
          "writable": true
        },
        {
          "name": "bVaultLpMint",
          "writable": true
        },
        {
          "name": "globalVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "globalTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "globalVault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payerTokenA",
          "writable": true
        },
        {
          "name": "payerTokenB",
          "writable": true
        },
        {
          "name": "payerPoolLp",
          "writable": true
        },
        {
          "name": "protocolTokenAFee",
          "writable": true
        },
        {
          "name": "protocolTokenBFee",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "mintMetadata",
          "writable": true
        },
        {
          "name": "rent"
        },
        {
          "name": "metadataProgram"
        },
        {
          "name": "vaultProgram"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "meteoraProgram",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "lockPool",
      "discriminator": [
        154,
        202,
        217,
        175,
        178,
        161,
        30,
        152
      ],
      "accounts": [
        {
          "name": "globalConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "bondingCurve",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  95,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "globalVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "lpMint",
          "writable": true
        },
        {
          "name": "aVaultLp",
          "writable": true
        },
        {
          "name": "bVaultLp",
          "writable": true
        },
        {
          "name": "tokenBMint"
        },
        {
          "name": "aVault",
          "writable": true
        },
        {
          "name": "bVault",
          "writable": true
        },
        {
          "name": "aVaultLpMint",
          "writable": true
        },
        {
          "name": "bVaultLpMint",
          "writable": true
        },
        {
          "name": "payerPoolLp",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "feeReceiver",
          "writable": true
        },
        {
          "name": "creatorReceiver",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "lockEscrow",
          "docs": [
            "CHECK lock escrow"
          ],
          "writable": true
        },
        {
          "name": "lockEscrow1",
          "docs": [
            "CHECK lock escrow"
          ],
          "writable": true
        },
        {
          "name": "escrowVault",
          "writable": true
        },
        {
          "name": "escrowVault1",
          "writable": true
        },
        {
          "name": "meteoraProgram",
          "writable": true
        },
        {
          "name": "eventAuthority"
        }
      ],
      "args": []
    },
    {
      "name": "swap",
      "discriminator": [
        248,
        198,
        158,
        145,
        225,
        117,
        135,
        200
      ],
      "accounts": [
        {
          "name": "globalConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "teamWallet",
          "writable": true
        },
        {
          "name": "teamWalletSecondary",
          "writable": true
        },
        {
          "name": "bondingCurve",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  95,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "globalVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "globalAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "globalVault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "userAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "direction",
          "type": "u8"
        },
        {
          "name": "minimumReceiveAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bondingCurve",
      "discriminator": [
        23,
        183,
        248,
        55,
        96,
        216,
        172,
        96
      ]
    },
    {
      "name": "config",
      "discriminator": [
        155,
        12,
        170,
        224,
        30,
        250,
        204,
        130
      ]
    }
  ],
  "events": [
    {
      "name": "completeEvent",
      "discriminator": [
        95,
        114,
        97,
        156,
        212,
        46,
        152,
        8
      ]
    },
    {
      "name": "launchEvent",
      "discriminator": [
        27,
        193,
        47,
        130,
        115,
        92,
        239,
        94
      ]
    },
    {
      "name": "swapEvent",
      "discriminator": [
        64,
        198,
        205,
        232,
        38,
        8,
        113,
        226
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "valueTooSmall",
      "msg": "valueTooSmall"
    },
    {
      "code": 6001,
      "name": "valueTooLarge",
      "msg": "valueTooLarge"
    },
    {
      "code": 6002,
      "name": "valueInvalid",
      "msg": "valueInvalid"
    },
    {
      "code": 6003,
      "name": "incorrectConfigAccount",
      "msg": "incorrectConfigAccount"
    },
    {
      "code": 6004,
      "name": "incorrectAuthority",
      "msg": "incorrectAuthority"
    },
    {
      "code": 6005,
      "name": "overflowOrUnderflowOccurred",
      "msg": "Overflow or underflow occured"
    },
    {
      "code": 6006,
      "name": "invalidAmount",
      "msg": "Amount is invalid"
    },
    {
      "code": 6007,
      "name": "incorrectTeamWallet",
      "msg": "Incorrect team wallet address"
    },
    {
      "code": 6008,
      "name": "curveNotCompleted",
      "msg": "Curve is not completed"
    },
    {
      "code": 6009,
      "name": "curveAlreadyCompleted",
      "msg": "Can not swap after the curve is completed"
    },
    {
      "code": 6010,
      "name": "mintAuthorityEnabled",
      "msg": "Mint authority should be revoked"
    },
    {
      "code": 6011,
      "name": "freezeAuthorityEnabled",
      "msg": "Freeze authority should be revoked"
    },
    {
      "code": 6012,
      "name": "returnAmountTooSmall",
      "msg": "Return amount is too small compared to the minimum received amount"
    },
    {
      "code": 6013,
      "name": "ammAlreadyExists",
      "msg": "AMM is already exist"
    },
    {
      "code": 6014,
      "name": "notInitialized",
      "msg": "Global Not Initialized"
    },
    {
      "code": 6015,
      "name": "invalidGlobalAuthority",
      "msg": "Invalid Global Authority"
    },
    {
      "code": 6016,
      "name": "notWhiteList",
      "msg": "This creator is not in whitelist"
    },
    {
      "code": 6017,
      "name": "incorrectLaunchPhase",
      "msg": "incorrectLaunchPhase"
    },
    {
      "code": 6018,
      "name": "insufficientTokens",
      "msg": "Not enough tokens to complete the sell order."
    },
    {
      "code": 6019,
      "name": "insufficientSol",
      "msg": "Not enough SOL received to be valid."
    },
    {
      "code": 6020,
      "name": "sellFailed",
      "msg": "Sell Failed"
    },
    {
      "code": 6021,
      "name": "buyFailed",
      "msg": "Buy Failed"
    },
    {
      "code": 6022,
      "name": "notBondingCurveMint",
      "msg": "This token is not a bonding curve token"
    },
    {
      "code": 6023,
      "name": "notSol",
      "msg": "Not quote mint"
    },
    {
      "code": 6024,
      "name": "invalidMigrationAuthority",
      "msg": "Invalid Migration Authority"
    },
    {
      "code": 6025,
      "name": "notCompleted",
      "msg": "Bonding curve is not completed"
    },
    {
      "code": 6026,
      "name": "invalidMeteoraProgram",
      "msg": "Invalid Meteora Program"
    },
    {
      "code": 6027,
      "name": "arithmeticError",
      "msg": "Arithmetic Error"
    },
    {
      "code": 6028,
      "name": "slippageExceeded",
      "msg": "Slippage Exceeded"
    },
    {
      "code": 6029,
      "name": "mathOverflow",
      "msg": "Math Overflow"
    },
    {
      "code": 6030,
      "name": "curveLimitExceeded",
      "msg": "Curve Limit Exceeded"
    },
    {
      "code": 6031,
      "name": "virtualTokenReservesExceeded",
      "msg": "Virtual Token Reserves Exceeded"
    },
    {
      "code": 6032,
      "name": "tokenSupplyExceeded",
      "msg": "Token Supply Exceeded"
    },
    {
      "code": 6033,
      "name": "meteoraTokenReservesExceeded",
      "msg": "Meteora Token Reserves Exceeded"
    }
  ],
  "types": [
    {
      "name": "amountConfig",
      "generics": [
        {
          "kind": "type",
          "name": "t"
        }
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "range",
            "fields": [
              {
                "name": "min",
                "type": {
                  "option": {
                    "generic": "t"
                  }
                }
              },
              {
                "name": "max",
                "type": {
                  "option": {
                    "generic": "t"
                  }
                }
              }
            ]
          },
          {
            "name": "enum",
            "fields": [
              {
                "vec": {
                  "generic": "t"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "bondingCurve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "tokenTotalSupply",
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "type": "u8"
          },
          {
            "name": "virtualSolReserves",
            "type": "u64"
          },
          {
            "name": "virtualTokenReserves",
            "type": "u64"
          },
          {
            "name": "realSolReserves",
            "type": "u64"
          },
          {
            "name": "realTokenReserves",
            "type": "u64"
          },
          {
            "name": "lastRealSolReserves",
            "type": "u64"
          },
          {
            "name": "lastVirtualSolReserves",
            "type": "u64"
          },
          {
            "name": "meteoraTokenReserves",
            "type": "u64"
          },
          {
            "name": "meteoraSolAmount",
            "type": "u64"
          },
          {
            "name": "isCompleted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "completeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "bondingCurve",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "migrationAuthority",
            "type": "pubkey"
          },
          {
            "name": "teamWallet",
            "type": "pubkey"
          },
          {
            "name": "teamWalletSecondary",
            "type": "pubkey"
          },
          {
            "name": "migrationWallet",
            "type": "pubkey"
          },
          {
            "name": "platformBuyFee",
            "type": "u64"
          },
          {
            "name": "platformSellFee",
            "type": "u64"
          },
          {
            "name": "platformBuyFeeSecondary",
            "type": "u64"
          },
          {
            "name": "platformSellFeeSecondary",
            "type": "u64"
          },
          {
            "name": "curveLimit",
            "type": "u64"
          },
          {
            "name": "tokenSupplyConfig",
            "type": {
              "defined": {
                "name": "amountConfig",
                "generics": [
                  {
                    "kind": "type",
                    "type": "u64"
                  }
                ]
              }
            }
          },
          {
            "name": "tokenDecimalsConfig",
            "type": {
              "defined": {
                "name": "amountConfig",
                "generics": [
                  {
                    "kind": "type",
                    "type": "u8"
                  }
                ]
              }
            }
          },
          {
            "name": "initialVirtualTokenReservesConfig",
            "type": "u64"
          },
          {
            "name": "initialVirtualSolReservesConfig",
            "type": "u64"
          },
          {
            "name": "initialRealTokenReservesConfig",
            "type": "u64"
          },
          {
            "name": "initialMeteoraTokenReserves",
            "type": "u64"
          },
          {
            "name": "initialMeteoraSolAmount",
            "type": "u64"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "launchEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "bondingCurve",
            "type": "pubkey"
          },
          {
            "name": "metadata",
            "type": "pubkey"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "reserveLamport",
            "type": "u64"
          },
          {
            "name": "reserveToken",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "swapEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "bondingCurve",
            "type": "pubkey"
          },
          {
            "name": "solAmount",
            "type": "u64"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          },
          {
            "name": "platformFeeLamports",
            "type": "u64"
          },
          {
            "name": "platformFeeSecondaryLamports",
            "type": "u64"
          },
          {
            "name": "direction",
            "type": "u8"
          },
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "virtualSolReserves",
            "type": "u64"
          },
          {
            "name": "virtualTokenReserves",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
