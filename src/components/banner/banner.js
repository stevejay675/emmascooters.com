import Image from "next/image";
import './banner.css'
import Link from "next/link";
import * as motion from "framer-motion/client";



export  default  function Banner(props) {
    return(
        <section className="banner-section">
            <motion.img src={`${props.imageSrc}`}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ rotate: 360 }}
            drag="y"
            dragConstraints={{ left: -100, right: 100 }}
            
            />

            <motion.div className="banner-text">
               <h1>{props.label}</h1>
               <p>Discover our range of electric wheelchairs and mobility scooters designed for comfort, reliability, and independence.</p>
               <Link href="/Menu">Shop Now</Link>
            </motion.div>
        </section>
    )
}