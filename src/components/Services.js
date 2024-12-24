import React from "react";
import mother from '../assets/mother.png'
import son from '../assets/son.png'

const Services = ({items, itemx}) => {
  return (
    <>
      <div className="w-full h-[140vh]  ">
        <div className="w-full relative">
            <div className="hidden md:block absolute top-0 md:left-[0]">
            <img src={mother} alt="" className="h-[20rem] md:h-[23rem]" />
            </div>
            <div className="hidden md:block absolute top-0 right-[0]">
            <img src={son} alt="" className="h-[20rem] md:h-[23rem]" />
            </div>
          <div className="w-full flex justify-center text-center p-10 ">
            <div className="w-[35rem]">
            <h3 className="mb-6 text-2xl font-bold">Make you grow, together .</h3>
            <p className="mb-6 ">
              Vous avez beaucoup à nous apprendre sur votre marché et votre
              offre. Des infos précieuses qui méritent toute notre attention :
              parce qu’une solution digitale, ça se construit ensemble. C’est
              pour cela qu’un projet ne démarre jamais sans un vrai kick-off et
              que nous avons développés des méthodologies de co-construction.
              Vous impliquer dans chaque étape du projet, c’est vous en donner
              une maîtrise.
            </p>
            <button className="text-white bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full">
            nous contacter
            </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-gray-200 p-4 mt-20">
           <div className="w-[60rem] p-10 ">
           <h3 className="text-2xl font-semibold text-center mb-8">Ils nous ont fait confiance</h3>
           <div >
           <div className=" flex flex-wrap justify-around pb-10">
            {items.map((items, index) => (
             <div 
            key={items.id}
            className="cursor-pointer bg-cover hover:bg-pink-500 p-4 rounded-md transition duration-300 ease-in-out"
            >
             <img src={items.logoIcon} alt="" className="h-14" />
            </div>
            ))}
            </div>

           <div className="flex flex-wrap justify-around">
            {itemx.map((items, index) => (
                <div 
                key={items.id}
                className="cursor-pointer bg-cover hover:bg-blue-500 p-4 rounded-md transition duration-300 ease-in-out">
                <img src={items.logoIcon} alt="" className="h-14" />
                </div>
            ))}
           </div>
           </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Services;
