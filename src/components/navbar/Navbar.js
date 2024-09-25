"use client";
import './Navbar.css'; 
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";  // Import user icon
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { auth } from "../../app/firebase";
import TranslatorWidget from '../widget/TranslatorWidget';

function Navbar() {
  const pathname = usePathname(); 
  const [position, setPosition] = useState('absolute');
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // State to manage dropdown visibility

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar ${position}`}>
      <img src='images/logo.png' className='logo'/>
      <ul>
        <li className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`nav-link ${pathname === '/Shop' ? 'active' : ''}`}>
          <Link href="/Shop">Shop</Link>
        </li>
        <li className={`nav-link ${pathname === '/Restaurants' ? 'active' : ''}`}>
          <Link href="/Restaurants">Contact Us</Link>
        </li>
        <li className={`nav-link ${pathname === '/MobileApp' ? 'active' : ''}`}>
          <Link href="/About" target="_blank" rel="noopener noreferrer">
            About Us
          </Link>
        </li>
      </ul>

      <div className="nav-icons">
        <CiSearch className='nav-icon'/>
        <CiShoppingCart className='nav-icon'/>

        {user ? (
          <div className="user-menu" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <FaUserCircle className="nav-icon user-icon" />  {/* User icon */}
            {isDropdownOpen && (
              <div className="dropdown">
                <span>you're signed in  <br /><br /> {user.email}</span>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/Login">Log in</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
