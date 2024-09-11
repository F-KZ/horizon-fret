import React from 'react';
const Hero = () => {
    return (
        <section className=" p-24 gap-8 grid grid-cols-1 lg:grid-cols-1">
            {/* Première colonne */}
            <div>
                <h1 className="text-2xl text-customBlue lg:text-3xl font-semibold font-serif text-center lg:text-left mb-4 lg:mb-6">
                    Qu’est-ce que le fret transport ?
                </h1>
                <p className="text-base lg:text-lg text-justify leading-relaxed">
                    Le fret transport se définit par l’ensemble des étapes et des moyens qui encadrent le transport de marchandises. Par exemple, la logistique déployée, l’acheminement ou les moyens pour parvenir jusqu’à la destination de livraison. Son rôle notable influe directement sur les échanges commerciaux à l’intérieur d’un territoire ou sur le plan international. L’impact sur l’économie mondiale est donc réel.
                    <br /><br />
                    En fonction des infrastructures en place, le fret transport est assuré par différents moyens et voies. Cela inclut le transport routier et ferroviaire ainsi que les voies maritimes et aériennes. Pris individuellement, le terme fret peut également définir la marchandise en elle-même ou l’activité connexe au transport. Par exemple, le fret aérien ou le fret ferroviaire.
                    <br /><br />
                    À noter que le transport multimodal consiste à réaliser une opération de fret grâce à plusieurs solutions d’acheminement, notamment par le biais de routes fluviales. En reposant sa stratégie entrepreneuriale sur le principe du freight forwarding, l’objectif est d’optimiser les délais de livraison et de réduire les coûts générés par le transit.
                </p>
            </div>
            
            {/* Deuxième colonne */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-semibold font-serif text-center text-customBlue lg:text-left mb-4 lg:mb-6">
                    Service aux transitaires étrangers
                </h1>
                <p className="text-base lg:text-lg text-justify leading-relaxed">
                    Vous êtes un transitaire étranger et vous avez besoin d’assistance pour livrer des marchandises en France ou en Europe ? 
                    <br /><br />
                    Vous avec besoin d’assistance pour les formalités douanières en France ? 
                    <br /><br />
                    Vous êtes un déménageur étranger et vous avez besoin d’un service premium en France pour l’emballage ou le déballage des effets personnels de vos clients ? 
                    <br /><br />
                    Vous êtes un déménageur français et vous avez besoin d’assistance pour coordonner le transport et la livraison à l’étranger des effets personnels de vos clients ?
                </p>
            </div>
        </section>
    );
}

export default Hero;
