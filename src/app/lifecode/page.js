'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));
const AboutThree = dynamic(() => import('../components/aboutThree'));
const Pricing = dynamic(() => import('../components/pricinghackers'));
const BioNews = dynamic(() => import('../components/bionews'));
const Hackathons    = dynamic(() => import('../components/hackathons'));
const HackathonRules    = dynamic(() => import('../components/hackathonrules'));
const Sparks = dynamic(() => import('../components/sparks'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/1.webp',
            title: 'Registro',
            desc: 'Un pase único para hackers, mintable por 0.001 ETH, sirve como boleto de entrada. Si eres estudiante, no necesitas pagar la tarifa de mint. Solo carga tu identificación de la institución o ingresa el nombre de tu institución para obtener el descuento.'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: 'Formación de Equipos',
            desc: 'Únete a un equipo o hackea solo, puedes unirte a grupos preformados o publicar un mensaje para alianzas espontáneas.'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: 'Selección de Desafíos',
            desc: 'Selecciona tu arena de desafíos o, si te sientes valiente, opta por la participación cruzada para construir experiencias múltiples.'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: 'Desarrollo',
            desc: 'Esta es una competencia de velocidad contra ti mismo, un maratón de 48 horas para idear, desarrollar y prototipar soluciones innovadoras.'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: 'Envío y Evaluación',
            desc: 'Envía documentación detallada del proyecto y un pitch en video. Se evaluará en función de la innovación, ejecución y se valoran ideas y proyectos sobre la estética.'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: 'Ceremonia de Premios',
            desc: 'La gloria es tuya en un evento transmitido en vivo que celebra las ideas más brillantes y corona a los reyes de la innovación.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/7.webp',
            title: 'Ingeniería Genética',
            desc: 'Desarrolla soluciones innovadoras en ingeniería genética para mejorar las capacidades humanas y la longevidad.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/8.webp',
            title: 'Tecnología Vestible',
            desc: 'Diseña dispositivos vestibles de vanguardia que se integren perfectamente con el cuerpo humano y aumenten sus funciones.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/9.webp',
            title: 'Nuevos Paradigmas de Salud',
            desc: 'Revoluciona los paradigmas de salud explorando nuevos enfoques para el bienestar, la prevención de enfermedades y la longevidad.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/10.webp',
            title: 'Análisis de Biodatos',
            desc: 'Aprovecha el análisis de biodatos para obtener información sobre la salud humana y desarrollar soluciones personalizadas.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/11.webp',
            title: 'Medicina Regenerativa',
            desc: 'Explora el potencial de la medicina regenerativa para reparar y regenerar tejidos y órganos dañados.'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: 'Comunidad de Biohacking',
            desc: 'Únete a la vibrante comunidad de biohackers y contribuye al avance del potencial humano.'
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () => setUpdateCount(updateCount + 1),
      beforeChange: (current, next) => setSlideIndex(next),
      adaptiveHeight: true
    };

    return (<>
    <Sparks />
        <NavLight />

        
        <section className="relative md:py-24 py-16">
          <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="mb-4 md:text-3xl md:leading-normal hover-gradient-amber-5 text-2xl leading-normal font-semibold">LifeCode Biohacking Hackathon</h3>
              <p className="text-white font-semibold max-w-xl mx-auto">Explora la genética, la tecnología vestible y los nuevos paradigmas de salud para mejorar las capacidades humanas y la longevidad.</p>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {casesData.map((item, index) => {
                const Icon = item.icon;
                return (
                    (<div className="relative blur-sm hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                        <div className="relative overflow-hidden h-96">
                          <Image src={item.image} alt={item.title} className="opacity-80" fill style={{
                              objectFit: "cover"
                          }} />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-4">
                            <Icon className="h-12 w-12 text-white mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-m text-white px-3 text-center">{item.desc}</p>
                          </div>
                        </div>
                    </div>)
                );
              })}
            </Slider>
            
   
  <div className="flex justify-center mt-4">
    <input
      type="range"
      min={0}
      max={casesData.length - 1}
      value={slideIndex}
      onChange={e => sliderRef.current.slickGoTo(parseInt(e.target.value, 10))}
      className="slider"/>
               
  </div>
  <div className="my-4 text-center">
  <h5>Directrices del Concurso</h5>
</div>

<HackathonRules />
<Hackathons />
<Pricing />

          </div>
          <BioNews />
          <AboutThree />
         
        </section>
        <Footer />
    </>);
}
