import { ChainInfo } from "@keplr-wallet/types";
import { Bech32Address } from "@keplr-wallet/cosmos";

export const chainInfo: ChainInfo = {
    rpc: "http://chain-rpc.decolaps.5-server.gw.susuyo.ai",
    rest: "https://chain-api.decolaps.5-server.gw.susuyo.ai",
    chainId: "decolaps-testnet-1",
    chainName: "Decolaps",
    stakeCurrency: {
        coinDenom: "DECO",
        coinMinimalDenom: "udeco",
        coinDecimals: 6,
    },
    bip44: {
        coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("decolaps"),
    currencies: [
        {
            coinDenom: "DECO",
            coinMinimalDenom: "udeco",
            coinDecimals: 6,
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "DECO",
            coinMinimalDenom: "udeco",
            coinDecimals: 6,
        },
    ],
    features: ["stargate", "ibc-transfer"],
};