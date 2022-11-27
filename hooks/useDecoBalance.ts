import { Keplr } from "@keplr-wallet/types";
import { useEffect, useState } from "react";
import { chainInfo } from "../configs/chain";
import { useAddress } from "./useAddress";
import { useSigningClient } from "./useCosmJSClient";

export function useDecoBalance(keplr: Keplr | null) {
    const signingClient = useSigningClient(keplr);
}