import React from 'react';

import exports from "/images/export.png"
import contenaires from "/images/carton.png"
import pc from "/images/ordi.png"


const skillsData = [
    {
      name: "Import / Export de Marchandises",
      img: exports,
      link: "#",
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
      aosDelay: "0",
    },
    {
      name: "Déménagement International",
      img: contenaires,
      link: "#",
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
      aosDelay: "500",
    },
    {
      name: "Formalités Douanières",
     img: pc,
      link: "#",
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
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
                  <p className='px-4'>{skill.description}</p>
                  
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
  