import './popular.css';
import { CiStar, CiHeart  } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

export default  function Popular() {

   const popularproducts = [
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
      }
    ];

    
    return (
        <section className='popular-section'>
           <h1>Popular Products</h1>

           <div className='popular-dishes'>
              
                 {popularproducts.map((product) =>{
                     return (<div className='dish'>
                     <FaRegHeart  className='heart-icon'/>
                      <div className='image-container'><img src={`images/${product.imageUrl}`}/></div>
                         <h2 className='name'>{product.name}</h2>
                         <span> <CiStar /> {product.review}</span>
                         <p>{product.price}</p>
                   </div>)
                 })}

           </div>
           <Link className='see-all-btn' href='/Menu'>See All <FaArrowRight /></Link>

        </section>
    )
}