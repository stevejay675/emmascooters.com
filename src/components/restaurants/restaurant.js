import Link from 'next/link';
import './restaurant.css';
import { FaArrowRight } from "react-icons/fa6";

export default function Restaurant() {
  return (
    <section className="restaurant-section container">
      
      <h1 className='title'>Scooters for all Age</h1>

      <div className="restaurants">
        <div className="sub-restaurant">
          <img src="images/prs1.jpg" />
          <div className='restaurant-text'>
             <h1>All age groups</h1>
             <a>Order Now</a>
          </div>
          <div className='blur'></div>
        </div>

        <div className="sub-restaurant">
          <img src="images/prs2.jpg" />
          <div className='restaurant-text'>
             <h1>All age groups</h1>
             <a>Order Now</a>
          </div>
          <div className='blur'></div>
        </div>

        <div className="sub-restaurant">
          <img src="images/prs3.jpg" />
          <div className='restaurant-text'>
             <h1>All age groups</h1>
             <a>Order Now</a>
          </div>
          <div className='blur'></div>
        </div>

        <div className="sub-restaurant">
          <img src="images/prs1.jpg" />
          <div className='restaurant-text'>
             <h1>All age groups</h1>
             <a>Order Now</a>
          </div>
          <div className='blur'></div>
        </div>

       
      </div>

      <Link className='see-all-btn' href='/Restaurants'>See All <FaArrowRight /></Link>
    </section>
  );
}
