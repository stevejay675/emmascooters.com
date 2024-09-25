import './restaurant_list.css';
import { CiStar, CiHeart  } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

export  default  function RestaurantList() {
    return(
        <section className='restaurant-list-section'>
           <div className='restaurant-div'>
              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant1.jpg'/></div>
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.8</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant2.jpg'/></div>
                 
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.9</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant3.jpg'/></div>
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.8</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant4.jpg'/></div>
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.8</span>
              </div>


              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant5.jpg'/></div>
                 
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.9</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant6.jpg'/></div>
                 
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.9</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant4.jpg'/></div>
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.8</span>
              </div>


              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant5.jpg'/></div>
                 
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.9</span>
              </div>

              <div className='sub-restaurant'>
                 <div className='image-container'><img src='images/restaurant6.jpg'/></div>
                 
                    <h2 className='name'>G & G Restaurant</h2>
                    <span> <CiStar /> 4.9</span>
              </div>
              
          </div>
        </section>
    )
}