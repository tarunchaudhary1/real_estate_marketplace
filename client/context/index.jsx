"use client";

import { useContext, createContext, useEffect } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
  useContractEvents,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const realEstate = "Real Estate Dapp";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x7065Ec9660d9aE54795A93c44d51e8d3179D885f"
  );
  console.log(contract);
  const address = useAddress();
  const connect = useMetamask();

  return (
    <StateContext.Provider value={{ address, connect, contract, realEstate }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
