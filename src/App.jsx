import { useState } from "react";
import Header from "./containers/header/Header";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import What from "./containers/what/What";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import "./App.scss";
import {gsap, Power3} from "gsap";
function App() {
  //gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar timeline= {tl} ease= {ease}/>
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
