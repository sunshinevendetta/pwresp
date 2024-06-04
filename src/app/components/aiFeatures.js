import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IoIosSchool, GiInspiration, TbFriends, FaGamepad, GiSwordsPower, MdLocalGroceryStore } from "../assets/icons/vander";

const ToggleButton = dynamic(() => import('./toggleButton'));

export default function AiFeatures() {
  const featureData = [
    {
      icon: GiInspiration,
      title: 'Inspira',
      desc: 'Muestra cómo transformaste el mundo. Este es tu combustible. Enciende la chispa del cambio y deja que tu impacto se conozca.'
    },
    {
      icon: IoIosSchool,
      title: 'Educa',
      desc: 'Difunde tu sabiduría para los intrépidos. Sin requisitos previos, solo potencial. Empodera a otros con conocimiento e inspira grandeza.'
    },
    {
      icon: GiSwordsPower,
      title: 'Empodera',
      desc: 'Destacando las ideas más audaces del juego. Aquí, los sueños se hacen realidad. Desata el poder de la innovación y deja tu marca.'
    },
    {
      icon: FaGamepad,
      title: 'Área de Juegos',
      desc: 'Para aquellos que se atreven, para sumergirse y conquistar. Desafía el status quo. Adéntrate en un reino de posibilidades infinitas y prospera.'
    },
    {
      icon: TbFriends,
      title: 'Comunidad',
      desc: 'Organiza un lugar para tu comunidad, crea actividades especiales y genera recuerdos increíbles. Fomenta conexiones y celebra la unión.'
    },
    {
      icon: MdLocalGroceryStore,
      title: 'Mercado',
      desc: 'Compra, vende, intercambia RWA por tokens y viceversa, galería NFT, mercancía, productos. La tienda de la esquina del evento, una regla: SOLO CRIPTO.'
    },
  ];
  
  return (
    <>
      <div className="container relative md:mt-24 mt-16 hover-gradient-amber-7 text-white">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Reinos Personalizados</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Sumérgete en reinos meticulosamente diseñados para encender tu pasión, expandir tu conocimiento y potenciar tu viaje. Estos espacios transformadores sirven como catalizadores para desbloquear tu verdadero potencial y dar vida a ideas revolucionarias.</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6 ">
          {featureData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="group flex duration-500 xl:p-3 " key={index}>
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-green-400/5 group-hover:bg-amber-400 group-hover:text-white border-2 border-green-400/20 hover:border-green-600 text-green-400 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-semibold hover:text-amber-400 ">{item.title}</h4>
                  <p className="text-slate-400 mt-2 hover:text-amber-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
          <ToggleButton />
        </div>
      </div>
    </>
  );
}
