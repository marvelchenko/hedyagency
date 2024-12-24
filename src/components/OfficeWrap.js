import React from "react";
import sidebg2 from "../assets/sidebg1.png";

const OfficeWrap = () => {
  return (
    <>
      <div className="w-full relative flex flex-wrap text-white  ">
        <div className="flex justify-center">
          <div className="w-full md:w-[80vw] h-[50vh]  rounded-3xl bg-black">
            <div className="absolute md:top-0 top-[2rem] md:left-[6rem]">
              <img src={sidebg2} alt="" className="h-[20rem] md:h-[19.12rem]" />
            </div>
            <div className="w-full flex md:items-center md:justify-center p-4">
              <div className="md:w-[50rem] w-full pt- md:p-4 md:ml-10 ml-[7rem] ">
                <div className="flex gap-4 items-center mb-3 md:mb-4">
                  <h3 className="text-2xl">offre wrap</h3>
                  <p>img</p>
                </div>
                <p className="text-balance text-sm mb-2">
                  L'offre wrap vous permettra de lancer votre présence en ligne
                  avec un accompagnement stratégique sur-mesure, sans rogner sur
                  la qualité du design et du référencement.
                </p>

                <div className="md:flex md:items-center mb-4 md:gap-3">
                  <p>👉 Prestation SEO</p>
                  <p>👉 Design sur-mesure</p>
                  <p>👉 Stratégie digitale optimisée</p>
                </div>
              </div>
            </div>
            <button className="text-[10px] font-semibold ml-[8rem] md:ml-[9rem] bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full">
              en savoir plus sur cette offre
            </button>
          </div>
        </div>
        <div className="w-full relative text-black flex flex-col md:flex-row gap-4 justify-center pt-16">
        <div className="absolute md:top-[4rem] top-[7rem] md:left-[6rem]">
              <img src={sidebg2} alt="" className="h-[20rem] " />
        </div>
        <div className="absolute bottom-[3rem] md:top-[4rem] md:left-[38rem] left-[18rem]">
              <img src={sidebg2} alt="" className="h-[20rem] rotate-180 " />
        </div>
          <div className="box1 md:w-[40vw] w-full rounded-lg  bg-white p-8 pl-[8rem] shadow-md">
            <h3 className="font-semibold text-xl mb-4">offre toast</h3>
            <p className="text-[12px] mb-4">
              Vous avez besoin d'une présence en ligne rapide et efficace mais
              surtout limitée en terme de temps et/ou de budget : l'offre toast
              est faite pour vous !
            </p>
            <p className="text-[12px] mb-4">
              Design personnalisé, accompagnement, conseil...
            </p>
            <p className="text-[12px] mb-8 font-semibold">
              👉 Le tout sur une base solide en référencement pour que vos
              futurs clients vous trouvent en quelques clics.
            </p>
            <button className="text-[10px] font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full">
              parlez-nous de votre besoin
            </button>
          </div>
          <div className="box1 md:w-[40vw] w-full rounded-lg  bg-white p-8 md:pl-[8rem] pr-[8rem] md:pr-0 shadow-md">
            <h3 className="font-semibold text-xl mb-4">offre club</h3>
            <p className="text-[12px] mb-4">
              Vous êtes une agence et vous avez besoin de renfort sur des
              projets spécifiques ? Vous êtes une équipe d'experts et vous
              souhaitez intégrer des profils qui sachent s'adapter à votre
              organisation ? Votre demande colle davantage à une technologie
              spécifique ?
            </p>
            <p className="text-[12px] mb-8 font-semibold">
              👉 La force de cette offre c'est le réseau : chacun sa spécialité
              et à chaque projet son expertise.
            </p>
            <button className="text-[10px] font-semibold  text-white bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full">
              parlez-nous de votre besoin
            </button>
          </div>
        </div>
        <div className="text-center w-full md:pt-0 pt-5" >
          <h1 className="text-gray-200 text-[50px] md:text-[175px] font-bold">ergonomie</h1>
        </div>
      </div>
    </>
  );
};

export default OfficeWrap;
