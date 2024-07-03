import React from "react";
import perfilImg from "../assets/perfil.jpg";

const SectionCard = () => {
  return (
    <>
      <div className="hero w-4/5">
        <div className="hero-content flex-col lg:flex-row items-center">
          <img
            src={perfilImg}
            className="rounded-lg w-full lg:w-auto max-w-xs border-4 border-zinc-800 drop-shadow-lg"
            alt="Samuel Lamas Monje"
          />
          <div className="ml-10 mr-10 mt-6 lg:mt-0">
            <h1 className="text-5xl font-bold text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Samuel Lamas Monje
            </h1>
            <p className="py-6 text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Como programador Web Full Stack – Junior, estoy enfocado en
              especializarme en React.js y otros frameworks modernos de
              desarrollo web. Mi objetivo es continuar mi formación en el
              desarrollo de aplicaciones web, mejorando mis habilidades técnicas
              y contribuyendo de manera significativa a proyectos innovadores.
              Busco un entorno dinámico donde pueda aprender de un equipo
              experimentado, afrontar nuevos desafíos y crecer profesionalmente
              en el ámbito del desarrollo web.
            </p>
            {/*<button className="btn btn-primary">Cv Vitae</button>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCard;
