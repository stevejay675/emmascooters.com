import { React } from "react";
import Banner from "@/components/banner/banner";
import Category from "@/components/category/category";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Newsletter from "@/components/newsletter/newsletter";
import Popular from "@/components/popular/popular";
import Restaurant from "@/components/restaurants/restaurant";
import BannerSection from '@/components/otherBannner/otherBanner';
import NewArrivals from '@/components/newArrivals/NewArrivals';
import TelegramChatWidget from '@/components/widget/TelegramChatWidget';

export default function Home() {
  return (
    <div className='container'>
      <Navbar />
      <Banner label="Empower Your Mobility" imageSrc='images/banner.png'/>
      <Category />
      <Restaurant />
      <Popular />
      <BannerSection />
      <NewArrivals />
      <TelegramChatWidget />  {/* Added Telegram Chat Widget */}
      <Newsletter />
      <Footer />
    </div>
  );
}
