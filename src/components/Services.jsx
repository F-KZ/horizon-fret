import React from 'react';

import exports from "/images/export.png"
import contenaires from "/images/carton.png"
import pc from "/images/entreposage.png"

const skillsData = [
  {
    name: "Import / Export de Marchandises",
    img: exports,
    link: "#",
    description: "<p>Horizon Transport offre des solutions complètes d’importation et d’exportation, adaptées aux besoins des particuliers et des entreprises opérant sur le marché international.</p><p>Nous proposons une gamme de services spécialisés pour assurer le transport sûr et efficace de vos marchandises à travers le monde, que ce soit par voie maritime, aérienne ou terrestre.</p><p>Nos services d'import/export s’adressent aux entreprises souhaitant développer leur présence internationale, aux importateurs/exportateurs de biens industriels ou commerciaux, ainsi qu'aux particuliers souhaitant transporter des biens personnels d’un pays à un autre.</p>",
    aosDelay: "0",
  },
  {
    name: "Déménagement International",
    img: contenaires,
    link: "#",
    description: "<p>Horizon Transport est une société spécialisée dans le transport international et le déménagement par fret maritime.</p><p>Nous offrons des solutions sur mesure pour le transport de biens personnels et professionnels à l'échelle mondiale, avec une expertise particulière dans les déménagements longue distance et transcontinentaux.</p><p>Grâce à notre réseau mondial et notre expertise logistique, nous assurons un service fiable, efficace et économique pour nos clients.</p>",
    aosDelay: "500",
  },
  {
    name: "Entreposage",
    img: pc,
    link: "#",
    description: "<p>En complément de nos services de déménagement international, Horizon Transport propose des solutions d'entreposage sécurisées et flexibles pour répondre à vos besoins de stockage, qu'ils soient de courte ou de longue durée.</p><p>Que vous soyez en transition lors d’un déménagement, en attente de votre nouvelle résidence ou que vous ayez simplement besoin d’espace supplémentaire pour stocker vos biens, nous mettons à disposition des installations de qualité, adaptées à tous les types de biens.</p>",
    aosDelay: "1000",
  },
];


  const Services = () => {
    return (
      <>
        <span id="Services"></span>
        <div className=" py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
          <div className="container">
            <div className="pb-12">
              <h1
                data-aos="fade-up"
                className="text-3xl text-customBlue font-semibold text-center sm:text-4xl font-serif"
              >
                Nos Services
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8  ">
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="card shadow-custom text-center group space-y-3 sm:space-y-6 duration-300 bg-white rounded-[11px] pb-[10rem]"
                >
                  <img
                  className='h-[230px] object-cover w-full rounded-t-[10px] '
                   src={skill.img}
                  />
                  <h1 className="text-1xl font-bold text-customBlue">{skill.name}</h1>
                  <p
                  className="px-4 flex flex-col gap-4 text-left"
                  dangerouslySetInnerHTML={{ __html: skill.description }}
                />
                  
                </div>
              ))}
            </div>
          </div>
        <span id="Requis"></span>
        </div>
      </>
    );
  };
  
  export default Services;
  