"use client"

import Image from "next/image";
import "./category.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../app/globals.css'


export default function Category() {
  const categories = [
    { title: "Standard", imageUrl: "categ1.jpg" },
    { title: "Heavy-Duty", imageUrl: "categ2.jpeg" },
    { title: "Portable", imageUrl: "categ3.jpg" },
    { title: "3-Wheels", imageUrl: "categ4.jpg" },
    { title: "4-Wheels", imageUrl: "categ2.jpeg" },
    { title: "Luxurious", imageUrl: "categ3.jpg" },
    { title: "All-Terrain", imageUrl: "categ1.jpg" },
    { title: "Folding", imageUrl: "categ1.jpg" },
    { title: "Travel", imageUrl: "categ1.jpg" },
  ];

  return (
    <section className="category-section">
      <h1>Category</h1>
      <Swiper 
      navigation
      autoplay={true}
      modules={[ Navigation]}
      slidesPerView={3}
      className="categories">
        {categories.map((categorytype) => {
          return (
            <SwiperSlide className="sub-category">
              <img src={`images/${categorytype.imageUrl}`} />
              <h2>{categorytype.title}</h2>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </section>
  );
}
