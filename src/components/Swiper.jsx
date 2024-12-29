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
    backgroundImage: 'url("/vite-deploy-demo/images/boat3.png")',
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
            Par rapport à un fret aérien, un transport de marchandises par voie maritime émet 13 fois moins de CO2. 
            Ce paramètre est à considérer si l’on souhaite réduire son impact sur l’environnement et participer à sa protection.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Une manière économique de transporter des marchandises
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Economique
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Parmi les avantages conséquents du transport de marchandises par voie maritime, 
            il est important de spécifier qu’il est particulièrement économique. 
            En effet, les tarifs pour faire voyager des marchandises par le fret maritime sont beaucoup plus abordables que par voie terrestre ou aérienne.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          La diversité des marchandises transportées
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Pratique
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             On considère les navires de fret maritime comme des bateaux polyvalents permettant de transporter une grande diversité de marchandises.
             Il existe de nombreuses raisons d’opter pour le transport maritime. L’écologie, la diversité des marchandises, la fiabilité de ce mode de transport, 
             mais également son aspect économique en font un transport de marchandises idéal.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
