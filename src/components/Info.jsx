import "../styles/info.css";
import infoImg from "../assets/images/infoimg/info.png";
export default function Info() {
  return (
    <div className="info-container">
      <div className="info-img">
        <img src={infoImg} alt="infoimg" />
      </div>
      <div className="info-text">
        <div className="info-flex-box">
          <p className="info-p">Quality Craftmanship from build to delivery</p>
          <h1 className="info-h">Discover the beauty of a handmade kitchen</h1>
          <div className="info-div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </div>
          <a href="/" style={{ textDecoration: "none" }}>
            <div className="info-button">About Us</div>
          </a>
        </div>
      </div>
    </div>
  );
}
