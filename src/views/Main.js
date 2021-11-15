import React from "react";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Items } from "../components/items/Items";
import "../App.scss";

export function Main() {
  return (
    <div className="App">
      <Hero />
      <div className="AppContent">
        <h1>Collection</h1>
        <Items />
      </div>
      <Footer />
    </div>
  );
}
