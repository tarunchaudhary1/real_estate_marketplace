"use client";

import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Recommended from "./_components/recommended";
import Steps from "./_components/Steps";
import TopPropertyBuyers from "./_components/top_buyers";
import TopPropertySellers from "./_components/top_sellers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="w-full h-[2px] bg-gray-400 mt-4" />
      <Hero />
      <Recommended />
      <Steps />
      <TopPropertySellers />
      <TopPropertyBuyers />
      <Footer />
    </div>
  );
}
