import React from 'react'
import '../CSS/Cantact.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Cantact = () => {
  return (
    <div>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left">
          Welcome to our restaurant! We are dedicated to providing you with the best dining experience. Our chefs use the freshest ingredients to create delicious dishes that will tantalize your taste buds. Join us for a memorable meal with family and friends!
        </marquee>
      </div>
    <div className='amain'>
    <div className='left col-4'>
        <img className="cimg" src = "https://c4.wallpaperflare.com/wallpaper/97/355/812/food-india-indian-wallpaper-preview.jpg"/>
    </div>
    <div className='middle col-4'><div className="contact-container">
    <h2>Contact Us</h2>
    <div className="contact-details">
      <p>Address: 123 Foodie Street, Flavor Town, FL 12345</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@foodieplace.com</p>
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>
    <div className="restaurant-timings">
      <h3>Restaurant Timings</h3>
      <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
      <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
    </div>
  </div>
  </div>
  <div className='right col-4 '>
  <img className="cimg" src = "https://thumbs.dreamstime.com/z/idli-vada-sambar-three-traditional-popular-south-indian-vegetarian-breakfast-lunch-items-62957608.jpg"/>
  </div>
  </div>
  <div>
  <div className="support-cards">
        <div className="card">
          <h3>Email Support</h3>
          <p>If you have any questions, feel free to email us for support.</p>
          <button>Contact via Email</button>
        </div>
        <div className="card">
          <h3>Delivery Support</h3>
          <p>Need help with your delivery? Our support team is here to assist you.</p>
          <button>Delivery Support</button>
        </div>
        <div className="card">
          <h3>Help Center</h3>
          <p>Visit our help center for FAQs and additional resources.</p>
          <button>Visit Help Center</button>
        </div>
        <div className="card">
          <h3>Chat Support</h3>
          <p>Chat with our support team for quick assistance.</p>
          <button>Start Chat</button>
        </div>
      </div>
  </div>
        
      
  </div>
  )
}

export default Cantact;