import Card from "./card";

export default function Hero() {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      <div className="lg:row-span-2 lg:col-span-2">
        <Card
          imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
          size="lg"
          type="Luxury Villa"
          price="5.01 Matic"
        />
      </div>

      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Cozy Apartment"
        price="2.5 Matic"
      />
      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Modern Condo"
        price="3.2 Matic"
      />
      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Beach House"
        price="4.1 Matic"
      />
      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Urban Loft"
        price="3.6 Matic"
      />
      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Charming Cottage"
        price="2.8 Matic"
      />
      <Card
        imageSrc="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
        size="sm"
        type="Stylish Studio"
        price="3.1 Matic"
      />
    </div>
  );
}
