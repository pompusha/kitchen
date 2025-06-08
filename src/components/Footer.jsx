import "../styles/footer.css";
import logo from "../assets/logo/shoplogo/shoplogo.png";
import instalogo from "../assets/logo/sociallogo/insta.png";
import facelogo from "../assets/logo/sociallogo/face.png";
import twilogo from "../assets/logo/sociallogo/twi.png";
export default function Footer() {
  const sociallogoArray = [instalogo, facelogo, twilogo];

  return (
    <div className="footer-container">
      <div className="footer-shop-logo">
        <div className="footer-line"></div>
        <img src={logo} alt="{logoshop}" />
        <div className="footer-line"></div>
      </div>
      <div className="footer-content-container">
        <div className="footer-link-container">
          <h1 className="footer-h1">About</h1>

          <div className="foter-link-wrapper">
            <div className="footer-link">Shop</div>
            <div className="footer-link">Plan My Kitchen</div>
            <div className="footer-link">About Us</div>
            <div className="footer-link">Gallery</div>
          </div>
        </div>
        <div className="footer-link-container">
          <h1 className="footer-h1">Service</h1>

          <div className="foter-link-wrapper">
            <div className="footer-link">FAQ</div>
            <div className="footer-link">Contact</div>
            <div className="footer-link">How to Buy</div>
            <div className="footer-link">Downloads</div>
          </div>
        </div>

        <div className="footer-link-container">
          <h1 className="footer-h1">Info</h1>
          <div className="foter-link-wrapper">
            <div className="footer-link">Delivery</div>
            <div className="footer-link">Terms</div>
            <div className="footer-link">Privacy</div>
          </div>
        </div>
        <div className="footer-link-container">
          <h1 className="footer-h1">Follow</h1>
          <div className="foter-link-wrapper">
            <div className="foter-social-container">
              {sociallogoArray.map((el, index) => {
                return (
                  <div key={index} className="footer-sotial-img">
                    <img src={el} alt={`logo${el}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright Online MTC Home Kitchens 2018 - All rights reserved.
        Responsive website design, Development & Hosting by mtc.
      </div>
    </div>
  );
}
