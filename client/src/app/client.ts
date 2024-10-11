import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});

export const contract = getContract({
  client,
  chain: defineChain(80002),
  address: "0x2F9E56de8B95B60082e1D4161C80177277Ef59D7",
});

console.log(contract);
