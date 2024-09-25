import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Newsletter from "@/components/newsletter/newsletter";
import RestaurantList from "@/components/restaurant_list/retaurant_list";

export default function Restaurants () {
    return(
        <div className="restaurant-page container">
           <Navbar />
           <Banner label='RESTAURANTS' imageSrc='images/banner2.png'/>
\           <RestaurantList />
           <Newsletter />
           <Footer />
        </div>
    )
}