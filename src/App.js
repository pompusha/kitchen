import React from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <main>
        <Info />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
