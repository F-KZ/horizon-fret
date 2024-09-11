import React from 'react';
import header from '/images/header2.png'

const Header = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className="relative w-full">
        <img
          src={header}
          alt="header image"
          className="w-full"
        />

        {/* Texte superposé à l'image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 data-aos="zoom-in" className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl shadow-lg">
            Horizon Transport
          </h1>
          <p data-aos="zoom-in" data-aos-delay="1000" className="my-4 text-xl text-white">
            Fret Maritime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
