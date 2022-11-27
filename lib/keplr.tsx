
import { ReactNode, createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from "react";
import { Keplr } from "@keplr-wallet/types";
import { getKeplrFromWindow } from "@keplr-wallet/stores";
import { chainInfo } from "../configs/chain";
import { useAddress } from "../hooks/useAddress";


interface Props {
    children: ReactNode;
}

const KeyAccountAutoConnect = "account_auto_connect";

export const InfoContext = createContext({});

export const useInfo = () =>
    useContext<{
        login: Boolean;
        loading: Boolean;
        keplr: Keplr | null;
        connectWallet: () => Promise<void>;
    }>(InfoContext as any);

export const InfoProvider = ({ children }: Props) => {
    const [login, setLogin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [keplr, setKeplr] = useState<Keplr | null>(null);

    const address = useAddress(keplr);
    const connectWallet = async () => {
        setLoading(true);
        try {
          const newKeplr = await getKeplrFromWindow();
          if (!newKeplr) {
            setLoading(false);
            throw new Error("Keplr extension not found");
          }
    
          await newKeplr.experimentalSuggestChain(chainInfo);
          await newKeplr.enable(chainInfo.chainId);
    
          localStorage?.setItem(KeyAccountAutoConnect, "true");
          setKeplr(newKeplr);
    
          setLoading(false);
          setLogin(true); // TODO : change to global state
          console.log("login success");
        } catch (e) {
          setLoading(false);
          alert(e);
        }
    };
    useEffect(() => {
        const shouldAutoConnectAccount = localStorage?.getItem(KeyAccountAutoConnect) != null;
        if (shouldAutoConnectAccount) {
          connectWallet();
        }
      }, [keplr]);
      
      return (
        <InfoContext.Provider
        value={{ loading, login, keplr, connectWallet }}
        >
        {children}
        </InfoContext.Provider>
      );
};
