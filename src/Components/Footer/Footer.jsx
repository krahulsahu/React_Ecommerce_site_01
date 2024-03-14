import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import Facebook_icon from "../Assets/pintester_icon.png";
import Twitter_icon from "../Assets/whatsapp_icon.png";
// import Linkedin_icon from "../Assets/instagram_icon.png";




const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon">
          <a href="https://www.instagram.com/krahulsahu/?hl=en" target="_blank"> <img src={insta_icon} alt="" /></a>
        </div>
        <div className="footer-icon">
          <a href="https://www.instagram.com/krahulsahu/?hl=en" target="_blank"> <img src={Facebook_icon} alt="" /></a>
        </div>
        <div className="footer-icon">
          <a href="https://www.instagram.com/krahulsahu/?hl=en" target="_blank"> <img src={Twitter_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer
