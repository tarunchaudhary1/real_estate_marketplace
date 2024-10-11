"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useStateContext } from "@/context";

export default function Home() {
  const { address, connect, contract, realEstate } = useStateContext();
  return (
    <div>
      <h1>{realEstate}</h1>
      <button onClick={() => connect()}>Connect</button>
      <p>{address}</p>
    </div>
  );
}
