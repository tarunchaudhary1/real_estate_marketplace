import Image from "next/image";

const buyers = [
  {
    wallet: "0x9876...zyxw",
    rank: 1,
    totalValue: "7.3M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    wallet: "0x5432...vuts",
    rank: 2,
    totalValue: "6.1M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    wallet: "0x1112...rqpo",
    rank: 3,
    totalValue: "5.4M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    wallet: "0x3334...nmkl",
    rank: 4,
    totalValue: "4.8M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    wallet: "0x5556...jihg",
    rank: 5,
    totalValue: "4.5M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    wallet: "0x7778...fedc",
    rank: 6,
    totalValue: "4.2M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    wallet: "0x9990...cbaa",
    rank: 7,
    totalValue: "3.9M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    wallet: "0x2223...yxwv",
    rank: 8,
    totalValue: "3.5M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    wallet: "0x4445...utsr",
    rank: 9,
    totalValue: "3.1M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    wallet: "0x6667...qpon",
    rank: 10,
    totalValue: "2.8M MATIC",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function TopPropertyBuyers() {
  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Top Property Buyers
      </h2>

      {/* Buyers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {buyers.slice(0, 10).map((buyer, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-800 shadow-lg rounded-xl"
          >
            {/* Left Section - Avatar */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={buyer.avatar}
                  alt={`Avatar of Buyer ${buyer.rank}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              {/* Middle Section - Wallet Address and Money Interaction */}
              <div className="flex-grow px-4">
                <p className="text-gray-700 text-sm truncate">{buyer.wallet}</p>
                <p className="text-gray-500 text-xs">
                  Total Value: {buyer.totalValue}
                </p>
              </div>
            </div>

            {/* Right Section - Rank */}
            <div className="text-right">
              <p className="text-gray-900 font-bold text-lg">{buyer.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
