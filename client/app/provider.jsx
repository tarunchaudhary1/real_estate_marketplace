"use client";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import { StateContextProvider } from "@/context";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export const Provider = ({ children }) => {
  return (
    <ThirdwebProvider activeChain={ChainId.FantomTestnet}>
      <StateContextProvider>{children}</StateContextProvider>
    </ThirdwebProvider>
  );
};
