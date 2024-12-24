import React from "react";
import a from '../assets/a.png'
import ax from '../assets/ax.png'

const Notre = ({ notre }) => {
  return (
    <>
      <div className="w-full flex flex-wrap ">
        <div className="w-full flex flex-wrap pt-16 justify-center ">
          <div className="md:w-[80vw] rounded-2xl p-10 bg-black text-white text-wrap">
            <div className="w-[80vw] flex flex-wrap justify-center text-center">
              <div className="w-[30rem]">
                <h3 className="text-3xl font-semibold mb-4">
                  Notre méthodologie
                </h3>
                <p>
                  Créer une équipe pour votre projet c'est bien, avoir une
                  organisation sans faille c'est mieux. Pourquoi ? Pour gagner
                  en productivité, en temps et en ébullition d'idées.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center p-4 mt-10 gap-4">
                {notre.map((notre, index) => (
                  <div
                    key={notre.id}
                    className="w-[18rem] text-center flex flex-col items-center"
                  >
                    <div className="mb-2">
                      <img src={notre.icon} alt="" />
                    </div>
                    <h3 className="font-semibold mb-2">{notre.title}</h3>
                    <p className="text-[12px]">{notre.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-full flex-wrap items-center gap-16 mt-10 justify-center">
            <div className="box1 w-[20rem] ">
              <h3 className="text-2xl font-semibold mb-4">Derniers projets</h3>
              <p className="mb-8">
                Vous voulez en voir plus ? Contactez-nous et nous nous ferons un
                plaisir de partager avec vous quelques unes de nos réalisations.
              </p>
              <button className="text-white bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full">
              découvrir d'autres projets
            </button>
            </div>
            <div className="box2 flex justify-center flex-wrap gap-8">
              <img src={a} alt="a" className="h-36 md:h-80" />
              <img src={ax} alt="ax" className="h-36 md:h-80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notre;
