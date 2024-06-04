"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

import { MdKeyboardArrowDown } from "../assets/icons/vander";

export default function Terms() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);

  const accordianData = [
    {
      id: 1,
      title: 'Descripción General del Evento',
      desc: 'Power 2 The People es un evento vanguardista enfocado en la intersección de tecnología, finanzas y arte. Su objetivo es impulsar los límites de la innovación, el empoderamiento y el avance social con un total de miles de USD en premios.'
    },
    {
      id: 2,
      title: 'Participación y Elegibilidad',
      desc: 'Abierto a todos los apasionados por la tecnología, las finanzas y el arte. Los menores de edad requieren el consentimiento de un tutor. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.'
    },
    {
      id: 3,
      title: 'Reglas del Hackathon',
      desc: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.'
    },
    {
      id: 4,
      title: 'Criterios de Evaluación',
      desc: 'Los proyectos serán evaluados en base a Innovación y Creatividad, Ejecución y Presentación. Acceso a luminarias de la industria y recursos proporcionados por nuestros socios.'
    },
    {
      id: 5,
      title: 'Premios y Recompensas',
      desc: 'Un total de miles de USD en premios. Premios específicos para SyntehIQ, Anon Empire, LifeCode y Automate serán anunciados.'
    },
    {
      id: 6,
      title: 'Directrices para la Presentación',
      desc: 'Las presentaciones deben incluir una descripción detallada del proyecto, la tecnología utilizada y su relevancia con el tema de la aceleración. Todas las entradas deben ser obras originales creadas específicamente para el evento.'
    },
    {
      id: 7,
      title: 'Cumplimiento y Ética',
      desc: 'Los participantes deben adherirse a los estándares éticos y cumplir con las leyes y regulaciones pertinentes. Cualquier forma de manipulación o explotación está estrictamente prohibida.'
    },
  ];

  const challengeAreas = [
    {
      title: 'Hackathons',
      desc: [
        { id: 1, title: 'SyntehIQ (Hackathon de IA)', desc: 'Un crisol para innovaciones en IA centradas en análisis predictivo, aprendizaje automático y automatización inteligente, ofreciendo miles de USD en premios para proyectos que impulsen el avance social.' },
        { id: 2, title: 'Anon Empire (Hackathon de Web3)', desc: 'Con miles de USD en premios en juego, este desafío busca aplicaciones descentralizadas que fortalezcan la soberanía del usuario, la privacidad y el crecimiento liderado por la comunidad, aprovechando el poder transformador de la blockchain.' },
        { id: 3, title: 'LifeCode (Hackathon de Biohacking)', desc: 'Una frontera para biohackers, ofreciendo miles de USD en premios para aquellos que puedan revolucionar la genética, la tecnología portátil o nuevos paradigmas de salud para mejorar las capacidades humanas y la longevidad.' },
        { id: 4, title: 'Automate (Hackathon de Robótica)', desc: 'Esta arena, con una recompensa de miles de USD en premios, llama a innovaciones en robótica que presenten soluciones novedosas para la industria, la salud o el uso personal, mejorando la eficiencia y la sinergia humano-máquina.' },
      ]
    },
    {
      title: 'Torneo de Trading',
      desc: [
        { id: 1, title: 'Descripción General', desc: 'Los participantes compiten en un torneo de trading enfocado en maximizar las ganancias a través de operaciones estratégicas y gestión de riesgos.' },
        { id: 2, title: 'Elegibilidad', desc: 'Abierto a traders de todos los niveles. Los participantes pueden competir individualmente o en equipos.' },
        { id: 3, title: 'Reglas', desc: 'Reglas estrictas sobre prácticas de trading, transparencia y ética. Los participantes deben adherirse a las directrices de juego limpio.' },
        { id: 4, title: 'Premios', desc: 'Premios en efectivo significativos para los mejores desempeños basados en rentabilidad, estrategia y gestión de riesgos.' },
      ]
    },
    {
      title: 'Concursos de Arte',
      desc: [
        { id: 1, title: 'Fractal (Arte Generativo)', desc: 'Invita a los artistas a aprovechar el poder de los algoritmos, el código y los procesos digitales para crear obras de arte que den vida al tema de la aceleración.' },
        { id: 2, title: 'Prism (Arte Curado)', desc: 'Busca artistas que puedan conceptualizar y producir obras que interpreten de manera reflexiva el tema de la aceleración de la sociedad, con un fuerte énfasis en la integración de tecnología e innovación artística.' },
      ]
    }
  ];

  return (
    <>
      <NavLight />
      <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">Términos de Servicios</h5>
            </div>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out hover:text-amber-400">
                <Link href="/">Inicio</Link>
              </li>
              <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-amber-400" aria-current="page">Términos</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">Introducción :</h5>
                <p className="text-slate-400">Power 2 The People está diseñado para aprovechar el genio colectivo de desarrolladores, traders, artistas y visionarios, fomentando un futuro donde la tecnología sirve como catalizador para el progreso global y el crecimiento inclusivo.</p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Descripción General del Evento :</h5>
                <p className="text-slate-400">Acelerate no es simplemente un hackathon, es un crisol donde se forja el futuro de la IA, Web3, biohacking y robótica. Con una bolsa de premios de miles de USD y un plazo de 48 horas, este desafío se erige como un faro para disruptores, innovadores y visionarios interesados en moldear el futuro.</p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Áreas de Desafío :</h5>
                <ul className="list-none text-slate-400 mt-3">
                  {challengeAreas.map((area, idx) => (
                    <li className="flex mt-2" key={idx}>
                      <i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>{area.title}
                    </li>
                  ))}
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">Proceso de Registro :</h5>
                <p className="text-slate-400">Los participantes deben registrarse a través de un proceso de registro en línea intuitivo. El pase único de hacker, que se puede acuñar por 0.001 ETH, sirve como boleto de entrada, enfatizando el ethos centrado en blockchain del evento.</p>

                <h5 className="text-xl font-semibold mt-8">Reglas :</h5>

                <div className="mt-6">
                  {accordianData.map((item, index) => (
                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                      <h2 className="text-base font-semibold">
                        <button
                          type="button"
                          onClick={() => setActiveIndex(item.id)}
                          className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}
                        >
                          <span>{item.title}</span>
                          <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                        </button>
                      </h2>
                      <div className={activeIndex === item.id ? "" : "hidden"}>
                        <div className="p-5">
                          <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/privacy" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Aceptar</Link>
                  <Link href="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-amber-400 text-amber-400 hover:text-white rounded-md ms-2">Rechazar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
