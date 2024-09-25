'use client';

import './sidebar.css';

function Sidebar({ isOpen, onClose }) {

   const handleLinkClick = (event, sectionId) => {
      event.preventDefault();
      onClose();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    };

    return (
       <div className={`sidebar-section ${isOpen ? 'open' : 'closed'}`}>
          <button className="close-btn" onClick={onClose}>X</button>
          <ul>
             <li><a href="#" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
             <li><a href="#" onClick={(e) => handleLinkClick(e, 'service')}>Services</a></li>
             <li><a href="#" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
             <li><a href="#" onClick={(e) => handleLinkClick(e, 'partners')}>Partners</a></li>
          </ul>
       </div>
    );
}

export default Sidebar;
