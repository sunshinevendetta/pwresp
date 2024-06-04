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
const Web3News = dynamic(() => import('../components/web3news'));
const Hackathons = dynamic(() => import('../components/hackathons'));
const Web3Rules = dynamic(() => import('../components/web3rules'));
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
            desc: 'Un pase único para hackers, acuñable por 0.001 ETH, sirve como boleto de entrada. Si eres estudiante, no necesitas pagar las tarifas de acuñación, solo sube tu identificación de la institución o pon el nombre de tu institución para obtener el descuento.'
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
            desc: 'Esta es una competencia contra ti mismo, un maratón de 48 horas para idear, desarrollar y prototipar soluciones innovadoras.'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: 'Presentación y Evaluación',
            desc: 'Envía documentación detallada del proyecto y un video pitch, evaluado en innovación, ejecución y, valoramos ideas y proyectos sobre la estética.'
        },
        {
            icon: FaAward,
            image: '/images/blog/award.webp',
            title: 'Ceremonia de Premiación',
            desc: 'La gloria es tuya en un evento transmitido en vivo celebrando las ideas más brillantes y coronando a los reyes de la innovación.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/20.webp',
            title: 'Innovaciones DeFi',
            desc: 'Pionero en soluciones de finanzas descentralizadas que priorizan la seguridad, inclusión y eficiencia, reformando cómo funciona la finanza a nivel global.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/21.webp',
            title: 'Redes Sociales Descentralizadas',
            desc: 'Crea plataformas que mejoren el control del usuario, garanticen la privacidad y apoyen la libre expresión, transformando cómo las personas se conectan y comunican en línea.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/22.webp',
            title: 'Juegos Blockchain',
            desc: 'Desarrolla juegos basados en blockchain que proporcionen verdadera propiedad, gobernanza participativa y una experiencia de juego profundamente inmersiva.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/23.webp',
            title: 'Tecnología Zk',
            desc: 'Utiliza pruebas de conocimiento cero para construir soluciones que mejoren significativamente la privacidad y seguridad en transacciones e interacciones digitales.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/24.webp',
            title: 'Aplicaciones Web3 en la Vida Real',
            desc: 'Innova con tecnologías Web3 para crear aplicaciones en la vida real que integren perfectamente lo digital con el mundo físico, mejorando las experiencias cotidianas.'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: 'Comunidad de builders Web3',
            desc: 'Únete a la vibrante comunidad de hackers de web3 y contribuye al avance del potencial humano.'
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

    return (
        <>
            <Sparks />
            <NavLight />
            <section className="relative md:py-24 py-16">
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-4 md:text-3xl hover-gradient-amber-5 md:leading-normal text-2xl leading-normal font-semibold">Anon Empire Web3 Hackathon</h3>
                        <p className="text-white font-semibold max-w-xl mx-auto">Desarrolla aplicaciones descentralizadas que promuevan la soberanía y privacidad del usuario.</p>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {casesData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div className="relative p-6 blur-xl hover:blur-none rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                                    <div className="relative overflow-hidden h-96">
                                        <Image src={item.image} alt={item.title} className="opacity-80" fill style={{ objectFit: "cover" }} />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-4">
                                            <Icon className="h-12 w-12 text-white mb-4" />
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-m text-white px-3 text-center">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
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
                            className="slider"
                        />
                    </div>
                    <div className="my-4 text-center">
                        <h5>Guía del Concurso</h5>
                    </div>
                    <Web3Rules />
                    <Hackathons />
                    <Pricing />
                </div>
                <Web3News />
                <AboutThree />
            </section>
            <Footer />
        </>
    );
}
