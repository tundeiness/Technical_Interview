import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Advert from './Components/Advert';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles.css';

export default function App() {
  return (
    <>
      <Header />
      <div className="App" id="main">
        <Hero />
        <Advert />
        <Testimonial />
        <Contact />
        <Footer />
        {/* <p>Some placeholder</p> */}
      </div>
    </>
  );
}
