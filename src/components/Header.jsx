import "../styles/header.css";
import logoshop from "../assets/logo/shoplogo/shoplogo.png";
import cartimg from "../assets/cart/shoppingcart.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="social-wrapper">
          <div className="social-container">
            <a href="/" className="social-links-logo">
              <FaFacebookF size={16} color="ffffff" />
            </a>
            <a href="/" className="social-links-logo">
              <FaInstagram size={16} color="ffffff" />
            </a>
            <a href="/" className="social-links-logo">
              <FaTwitter size={16} color="ffffff" />
            </a>
          </div>
        </div>
        <div className="header-menu">
          <div className="shop-plan">
            <div>Shop</div>
            <div>Plan My Kitchen</div>
          </div>
          <img
            src={logoshop}
            alt="logoShop"
            className="logo-shop"
            loading="lazy"
          />
          <div className="about-gallery">
            <div>About Us</div>
            <div>Gallery</div>
          </div>
          <div className="header-button">
            My ORder <img src={cartimg} alt="cart" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
