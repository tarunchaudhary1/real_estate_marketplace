import Image from "next/image";

const sellers = [
  {
    wallet: "0x1234...abcd",
    rank: 1,
    totalValue: "8.5M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    wallet: "0x5678...efgh",
    rank: 2,
    totalValue: "7.2M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    wallet: "0x9101...ijkl",
    rank: 3,
    totalValue: "6.8M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    wallet: "0x1121...mnop",
    rank: 4,
    totalValue: "6.0M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    wallet: "0x3141...qrst",
    rank: 5,
    totalValue: "5.5M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    wallet: "0x5161...uvwx",
    rank: 6,
    totalValue: "5.0M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    wallet: "0x7181...yz12",
    rank: 7,
    totalValue: "4.8M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    wallet: "0x9201...abcd",
    rank: 8,
    totalValue: "4.5M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    wallet: "0x3210...efgh",
    rank: 9,
    totalValue: "4.2M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    wallet: "0x5432...ijkl",
    rank: 10,
    totalValue: "3.9M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

export default function TopPropertySellers() {
  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Top Property Sellers
      </h2>

      {/* Sellers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {sellers.slice(0, 10).map((seller, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-800 shadow-lg rounded-xl"
          >
            {/* Left Section - Avatar */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={seller.avatar}
                  alt={`Avatar of Seller ${seller.rank}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              {/* Middle Section - Wallet Address and Money Interaction */}
              <div className="flex-grow px-4">
                <p className="text-gray-700 text-sm truncate">
                  {seller.wallet}
                </p>
                <p className="text-gray-500 text-xs">
                  Total Value: {seller.totalValue}
                </p>
              </div>
            </div>

            {/* Right Section - Rank */}
            <div className="text-right">
              <p className="text-gray-900 font-bold text-lg">{seller.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
