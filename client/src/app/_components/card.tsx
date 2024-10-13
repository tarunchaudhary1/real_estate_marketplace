import Image from "next/image";

interface CardProps {
  size: "sm" | "lg";
  imageSrc: string;
  type: string;
  price: string;
}

export default function Card({ size, imageSrc, type, price }: CardProps) {
  const imageWidth = size === "sm" ? 500 : 600;
  const imageHeight = size === "sm" ? 400 : 600;

  return (
    <div
      className={`relative max-w-auto rounded-lg overflow-hidden shadow-lg transition-transform duration-200 transform hover:scale-105`}
    >
      <Image
        src={imageSrc}
        alt={type}
        width={imageWidth}
        height={imageHeight}
        className="object-fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
        <div className="text-white text-lg font-semibold">{type}</div>
        <div className="text-white text-sm">${price}</div>
      </div>
    </div>
  );
}
