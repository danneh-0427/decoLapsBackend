import { defaultRegistryTypes as defaultStargateTypes, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Keplr } from "@keplr-wallet/types";
import { chainInfo } from "../configs/chain";
import { useEffect, useState } from "react";