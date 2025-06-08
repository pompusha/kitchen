import "../styles/gallery.css";
import firstimg from "../assets/images/gallery/first.png";
import secimg from "../assets/images/gallery/sec.png";
import thirdimg from "../assets/images/gallery/third.png";
import forthimg from "../assets/images/gallery/forth.png";

export default function Gallery() {
  const imgArray = [firstimg, secimg, thirdimg, forthimg];
  return (
    <div className="gallery-container">
      <h1 className="gallery-h1">Customer Gallery</h1>
      <div className="gallery-img">
        {imgArray.map((el, index) => {
          return (
            <div className="gallery-img-container" key={index}>
              <img src={el} alt={`photo#${index}`} loading="lazy" />
            </div>
          );
        })}
      </div>
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="gallery-button">View More</div>
      </a>
    </div>
  );
}
