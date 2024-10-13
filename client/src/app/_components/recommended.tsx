import { Heart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  avatars: string[];
  owner: string;
  category: string;
  price: string;
  reviews: number;
}

export default function Recommended() {
  const cards: CardProps[] = Array.from({ length: 6 }, () => ({
    imageSrc:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400",
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
    ],
    owner: "John Doe",
    category: "Luxury Villa",
    price: "5.01 Matic",
    reviews: Math.floor(Math.random() * 100), // Random review count
  }));

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <div className="h-3 w-3 bg-blue-500 rounded-full animate-ping absolute"></div>
          <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold">New Properties</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative max-w-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Property Image */}
            <Image
              src={card.imageSrc}
              alt={card.category}
              width={400}
              height={300}
              className="object-cover w-full h-[200px]"
            />

            {/* Avatars of Interested Users */}
            <div className="flex -space-x-2 mt-2 px-4">
              {card.avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>

            {/* Property Details */}
            <div className="p-4">
              <p className="text-gray-800 font-semibold">{card.owner}</p>
              <p className="text-gray-500">{card.category}</p>

              {/* Price and Reviews */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-800 font-bold">{card.price}</span>
                <div className="flex items-center gap-1">
                  <Heart className="text-red-500" />
                  <span>{card.reviews} reviews</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
