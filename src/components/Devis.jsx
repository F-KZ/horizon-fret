import React from 'react';
//import contact from "/images/contact4.svg"

const Devis = () => {
    return (
        <div className="bg-customBlue px-14 rounded-lg p-6 sm:p-8 mt-8">
  <div className="flex flex-col xl:flex-row items-center justify-between text-center xl:text-left">
    <div className="mb-6 xl:mb-0">
      <div className="text-2xl font-bold text-white">Votre Devis Gratuit en quelques clics</div>
      <div className="text-white opacity-75">Nous vous contacterons dans les plus brefs délais.</div>
    </div>
    <div className="xl:ml-8 text-white">
      <h2 className="text-xl font-semibold mb-4">
        N'attendez plus, faites une estimation gratuite de vos travaux et laissez-nous vous guider durant toute la procédure
      </h2>
      <a href="./devis.php">
        <button className="bg-white text-primary font-bold py-2 px-4 rounded-md shadow-lg hover:bg-gray-200 transition">
          Je fais mon Devis
        </button>
      </a>
      <div className="text-sm opacity-75 mt-3">
        Nous nous soucions de votre confidentialité et ne partagerons jamais vos coordonnées.
      </div>
    </div>
  </div>
</div>

    );
}

export default Devis;
