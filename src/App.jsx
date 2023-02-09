import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/MainHeader/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import scrollreveal from "scrollreveal";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
          <div>
          <ScrollToTop />
          <Navbar />
          <Hero />
          <Services />
          <Recommend />
          <Testimonials />
          <Footer />
        </div>

  );
}
