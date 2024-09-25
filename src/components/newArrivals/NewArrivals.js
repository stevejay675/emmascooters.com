import './newArrivals.css';
import { CiStar, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

export default function NewArrivals() {
  const newArrivals = [
    {
      name: "EcoLite Breeze",
      imageUrl: "na1.jpeg",
      price: "600,000 FCFA",
      details: "A compact and eco-friendly mobility scooter designed for smooth rides in urban environments, featuring lightweight build and energy-efficient technology.",
      review: 4.7,
    },
    {
      name: "SpeedyMove 500",
      imageUrl: "na2.jpg",
      price: "750,000 FCFA",
      details: "Equipped with a powerful motor for higher speeds and superior battery life. This scooter is perfect for outdoor adventures and daily commutes.",
      review: 4.8,
    },
    {
      name: "FoldAway Go",
      imageUrl: "na3.jpg",
      price: "500,000 FCFA",
      details: "A foldable mobility scooter designed for easy storage and transport. Comes with padded seating, LED lighting, and durable tires for all terrains.",
      review: 4.6,
    },
    {
      name: "Urban Rider X1",
      imageUrl: "na4.jpg",
      price: "680,000 FCFA",
      details: "A stylish scooter with advanced features like a digital dashboard, long battery range, and all-terrain tires, suitable for both indoor and outdoor use.",
      review: 4.9,
    },
    {
      name: "MountainMaster Pro",
      imageUrl: "na5.jpg",
      price: "1,000,000 FCFA",
      details: "Designed for rugged terrains, this heavy-duty scooter comes with reinforced suspension, large tires, and a strong frame for stability and durability.",
      review: 5.0,
    },
    {
      name: "Swift Glider",
      imageUrl: "na6.jpeg",
      price: "550,000 FCFA",
      details: "A sleek and nimble scooter that makes moving around city streets a breeze. It offers high maneuverability and a comfortable seating arrangement.",
      review: 4.7,
    },
    {
      name: "EconoRide 300",
      imageUrl: "na7.jpg",
      price: "400,000 FCFA",
      details: "An affordable scooter ideal for daily use. Its energy-saving features and compact design make it a practical option for indoor and outdoor mobility.",
      review: 4.5,
    },
    {
      name: "CruiserMax XL",
      imageUrl: "na8.jpeg",
      price: "850,000 FCFA",
      details: "A large scooter with a high weight capacity, built for comfort and long-distance rides. It includes an adjustable seat, a strong motor, and premium safety features.",
      review: 4.9,
    }
  ];

  return (
    <section className="new-arrivals-section">
      <h1>New Arrivals</h1>

      <div className="new-arrivals">
        {newArrivals.map((product) => (
          <div className="product" key={product.name}>
            <FaRegHeart className="heart-icon" />
            <div className="image-container">
              <img src={`images/${product.imageUrl}`} alt={product.name} />
            </div>
            <h2 className="name">{product.name}</h2>
            <span>
              <CiStar /> {product.review}
            </span>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <Link className="see-all-btn" href="/Menu">
        See All <FaArrowRight />
      </Link>
    </section>
  );
}
