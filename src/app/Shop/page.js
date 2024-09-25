import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Newsletter from "@/components/newsletter/newsletter";
import '../globals.css';
import { CiStar, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

export  default function Shop () {
    const productsArray = [
        {
          name: "ScootLite",
          imageUrl: "pp1.jpg",
          price: "500,000 FCFA",
          details: "A lightweight, foldable mobility scooter ideal for easy transport and storage. Equipped with a comfortable seat and adjustable handlebars, perfect for everyday use.",
          review: 4.8,
        },
        {
          name: "UltraGlide Pro",
          imageUrl: "pp2.jpg",
          price: "700,000 FCFA",
          details: "A premium scooter designed for long-distance travel. Features include a powerful motor, high ground clearance, and advanced suspension for a smooth ride.",
          review: 4.9,
        },
        {
          name: "Compact Rover",
          imageUrl: "pp3.jpg",
          price: "450,000 FCFA",
          details: "Compact and durable, this scooter is designed for navigating tight spaces. It offers easy handling, a padded seat, and excellent battery life.",
          review: 4.7,
        },
        {
          name: "Freedom Cruiser",
          imageUrl: "pp4.jpeg",
          price: "650,000 FCFA",
          details: "A luxury scooter with a high weight capacity, full suspension system, and ergonomic design. Ideal for longer outdoor adventures and tough terrains.",
          review: 4.9,
        },
        {
          name: "PowerBoost 300",
          imageUrl: "pp5.jpeg",
          price: "800,000 FCFA",
          details: "A high-performance scooter with a top speed of 15km/h and a range of 40km per charge. Comes with premium features like a digital dashboard and LED lighting.",
          review: 5.0,
        },
        {
          name: "EcoMove Mini",
          imageUrl: "pp6.jpg",
          price: "400,000 FCFA",
          details: "Designed for eco-conscious users, this scooter offers energy efficiency and portability. Perfect for indoor use with its tight turning radius and silent motor.",
          review: 4.6,
        },
        {
          name: "CityRide X",
          imageUrl: "pp7.jpg",
          price: "550,000 FCFA",
          details: "A sleek urban scooter designed for city dwellers. Features include a modern design, comfortable seating, and easy maneuverability through crowded areas.",
          review: 4.7,
        },
        {
          name: "AllTerrain Pro",
          imageUrl: "pp8.jpg",
          price: "900,000 FCFA",
          details: "Built for rugged outdoor use, this scooter comes with extra-large wheels, powerful traction, and a heavy-duty frame. It's perfect for outdoor adventures and rough terrains.",
          review: 4.9,
        }, 
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


    return(
        <div className="menu-page container">
            <div className="shop-products">
           <Navbar />
           <MenuCategory list1='All' list2='BreakFast' list3='Launch' list4='snacks' list5='Drinks'/>
           <div>
            {productsArray.map((product) => (
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
           <Newsletter />
           <Footer />
           </div>
        </div>
    )
}