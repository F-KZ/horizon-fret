import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
 

  return (
    <>
    <Navbar/>
    <div className="pt-[62px] md:pt-16">
    <Header/>
    </div>
    <Hero/>
    <Services/>
     <Footer/>
    </>
  )
}

export default App
