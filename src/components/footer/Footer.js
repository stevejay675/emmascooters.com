"use client";
import "./footer.css";
import { CiDeliveryTruck, CiCreditCard1  } from "react-icons/ci";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHeadset,

} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer container">
      {/* Top Line with Features */}
      <div className="footer-features">
        <div className="feature-item">
          <CiDeliveryTruck className="feature-icon" />
          <div>
            <h4>Free Shipping</h4>
            <p>We provide free shipping for orders over $200</p>
          </div>
        </div>
        <div className="feature-item">
          <FaHeadset className="feature-icon" />
          <div>
            <h4>24/7 Support</h4>
            <p>Contact us via email for support</p>
          </div>
        </div>
        <div className="feature-item">
          <CiCreditCard1 className="feature-icon" />
          <div>
            <h4>Online Payment</h4>
            <p>We accept online payments via bank cards</p>
          </div>
        </div>
        <div className="feature-item">
          <MdPlaylistAddCheckCircle className="feature-icon" />
          <div>
            <h4>Product Variety</h4>
            <p>Visit our shop for a wide variety of products</p>
          </div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="footer-links">
        <div className="link-group">
          <h4>Our Stores</h4>
          <ul>
            <li><a href="#">New York</a></li>
            <li><a href="#">London</a></li>
            <li><a href="#">Chicago</a></li>
            <li><a href="#">Miami</a></li>
          </ul>
        </div>
        <div className="link-group">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="link-group">
          <h4>F.A.Q</h4>
          <ul>
            <li><a href="#">How to order</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Payment and Social Section */}
      <div className="footer-bottom">
        <div className="payment-section">
          <h4>Payment Methods</h4>
          <img src="images/paypal.png" alt="Paypal" />
          <img src="images/mastercard.png" alt="Mastercard" />
          <img src="images/paypal.png" alt="Visa" />
          <img src="images/paypal.png" alt="Bitcoin" />
        </div>

        
        <div className="social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="footer-disclaimer">
        <p>&copy; {new Date().getFullYear()} Designed by Steve Jay, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
