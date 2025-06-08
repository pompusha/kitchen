import "../styles/hero.css";

export default function Hero() {
  return (
    <div>
      <div className="hero-wrapper">
        <p className="hero-p">Design and order your new kitchen online today</p>
        <h1 className="hero-h">
          Bespoke & made to measure handmade kitchen design
        </h1>
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="hero-button">Order Now</div>
        </a>
      </div>
      <div className="indicator-container">
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
}
