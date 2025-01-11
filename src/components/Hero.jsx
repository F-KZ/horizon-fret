import React from 'react';
import contenaires from "/images/1.png"
import image2 from "/images/8.png"

const Hero = () => {
    return (
        <section className=" p-8 grid grid-cols-1 lg:grid-cols-1">
            {/* Première colonne */}
            <div className='flex flex-row-reverse w-full'>
            <div className='hidden md:flex md:w-1/2'>
                <img src={contenaires}
                className='object-cover'
                />
            </div>
            <div className='md:w-1/2 p-8'>
                <h1 className="text-2xl text-customBlue lg:text-3xl font-semibold font-serif text-center lg:text-left mb-4 lg:mb-6">
                    Qu’est-ce que le fret  ?
                </h1>
                <p className="text-base font-extralight lg:text-lg text-justify leading-relaxed">
                    Le fret  se définit par l’ensemble des étapes et des moyens qui encadrent le transport de marchandises. Par exemple, la logistique déployée, l’acheminement ou les moyens pour parvenir jusqu’à la destination de livraison. Son rôle notable influe directement sur les échanges commerciaux à l’intérieur d’un territoire ou sur le plan international. L’impact sur l’économie mondiale est donc réel.
                </p>
            </div>
            </div>
            
            {/* Deuxième colonne */}
            <div className='flex flex-row w-full'>
            <div className='hidden md:flex md:w-1/2'>
                <img src={image2}
                className='object-cover'
                />
            </div>
            <div className='md:w-1/2 p-8'>
                <h1 className="text-2xl lg:text-3xl font-semibold font-serif text-center text-customBlue lg:text-left mb-4 lg:mb-6">
                    Service transit
                </h1>
                <p className="text-base lg:text-lg text-justify font-extralight leading-relaxed">
                    Vous avez besoin d’assistance pour livrer des marchandises en Afrique ?  
                    Vous êtes un déménageur et vous avez besoin d’un service premium en France pour l’emballage ou le déballage des effets personnels de vos clients ? 
                    et vous avez besoin d’assistance pour coordonner le transport et la livraison à l’étranger des effets personnels de vos clients ?
                </p>
            </div>
            </div>
        </section>
    );
}

export default Hero;
