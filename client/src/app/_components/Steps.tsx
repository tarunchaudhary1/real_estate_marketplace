import { Wallet, Home, BadgeCheck, BadgeIndianRupee } from "lucide-react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

const steps = [
  {
    title: "Set Up Your Wallet",
    description: "Connect your digital wallet to get started.",
    icon: <Wallet size={40} className="text-blue-500" />,
  },
  {
    title: "Register Your Property",
    description: "Provide the details of your property for verification.",
    icon: <Home size={40} className="text-green-500" />,
  },
  {
    title: "Publish Your Property",
    description: "List your property on the marketplace for buyers.",
    icon: <BadgeCheck size={40} className="text-yellow-500" />,
  },
  {
    title: "Buy or Sell Property",
    description: "Engage in seamless transactions to buy or sell property.",
    icon: <BadgeIndianRupee size={40} className="text-red-500" />,
  },
];

export default function Steps() {
  return (
    <div>
      <h1 className="ml-8 text-3xl font-bold my-4 text-white">
        Create and sell properties
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 bg-gray-900">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.description}</p>
            {step.title === "Set Up Your Wallet" && (
              <ConnectButton client={client} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
