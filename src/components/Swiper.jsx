import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Swipe() {
  return (
    <div className='py-6'>
    {/* AERIEN MARITME TERRESTRE */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
    backgroundImage: 'url("/images/boat3.png")',
  }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Un moyen de transport respectueux de l’environnement 
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Ecologique
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Le premier avantage du transport maritime n’est autre que le respect de l’environnement. 
             Un transport de marchandises par voie maritime émet 13 fois moins de CO2. 
            Ce paramètre est à considérer si l’on souhaite réduire son impact sur l’environnement et participer à sa protection.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Une manière économique de transporter des marchandises
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Economique et Pratique
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Parmi les avantages conséquents du transport de marchandises par voie maritime, 
            il est important de spécifier qu’il est particulièrement économique et permet une large diversité de marchandises . 
            En effet, les tarifs pour faire voyager des marchandises par le fret maritime sont beaucoup plus abordables.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Fret Aérien le plus rapide des moyens de transports
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Fiable et Sécurisé
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Le fret aérien est une méthode de transport de marchandises par avion. C'est une solution rapide, souvent utilisée pour des produits à forte valeur ajoutée, des marchandises sensibles, ou des envois urgents.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
