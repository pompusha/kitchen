import "../styles/testimonials.css";
import left from "../assets/images/testimonial/left.png";
import right from "../assets/images/testimonial/right.png";
export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <div className="arrow">
        <img src={left} alt="left" />
      </div>
      <div className="testimonial-text-container">
        <h2 className="testimonial-h2">What Our Customers Say</h2>
        <h1 className="testimonial-h1">
          Over 35 years experience designing handmade kitchens
        </h1>
        <p className="testimonial-p">
          Since my first contact I have received a very high level of customer
          service and advice with my kitchen plans. Ben responded very quickly
          to all of my emails and delivery of the kitchen was as planned.
        </p>
        <p className="testimonial-name">Jane, Dundee</p>
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="testimonial-button">Frequently Asked Questions</div>
        </a>
      </div>
      <div className="arrow">
        <img src={right} alt="right" />
      </div>
    </div>
  );
}
