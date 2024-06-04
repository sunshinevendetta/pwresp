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
const AINews = dynamic(() => import('../components/ainews'));
const Hackathons = dynamic(() => import('../components/hackathons'));
const HackathonRules = dynamic(() => import('../components/hackathonrules'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow`}
                style={{ ...style, display: 'block', right: '10px' }}
                onClick={onClick}
            />
        );
    }

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow`}
                style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
                onClick={onClick}
            />
        );
    }

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/1.webp',
            title: 'Registro',
            desc: 'Un pase único de hacker, que se puede acuñar por 0.001 ETH, sirve como boleto de entrada. Si eres estudiante, no necesitas pagar tarifas de acuñación, solo sube tu identificación institucional o el nombre de tu institución para obtener el descuento.'
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
            desc: 'Selecciona tu arena de desafíos o si te sientes valiente, opta por la participación cruzada para construir experiencias múltiples.'
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
            title: 'Presentación y Evaluación',
            desc: 'Presenta documentación detallada del proyecto y un video pitch. Se evaluará en función de la innovación, la ejecución y las ideas y proyectos, más que la estética.'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: 'Ceremonia de Premiación',
            desc: 'La gloria es tuya en un evento transmitido en vivo que celebra las ideas más brillantes y corona a los reyes de la innovación.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/13.webp',
            title: 'IA y Aprendizaje Automático',
            desc: 'Desarrolla algoritmos que mejoren con la experiencia. Enfrenta proyectos sobre redes neuronales, aprendizaje profundo o aprendizaje por refuerzo.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/14.webp',
            title: 'Ética en la IA',
            desc: 'Aborda problemas éticos en la IA, desde el sesgo en los modelos de aprendizaje automático hasta la toma de decisiones en sistemas autónomos.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/15.webp',
            title: 'Procesamiento de Lenguaje Natural',
            desc: 'Crea soluciones que procesen el lenguaje humano. Trabaja en traducción, análisis de sentimientos o tecnologías de chatbot.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/16.webp',
            title: 'Visión por Computadora',
            desc: 'Aprovecha el poder de la IA para interpretar y comprender el mundo visual. Trabaja en proyectos de reconocimiento de imágenes o detección de movimiento.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/17.webp',
            title: 'IA en la Salud',
            desc: 'Innova en el sector de la salud utilizando IA para predecir enfermedades, personalizar tratamientos o mejorar la precisión diagnóstica.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/18.webp',
            title: 'IA para Robótica',
            desc: 'Desarrolla robots inteligentes que puedan aprender de su entorno y realizar tareas complejas de manera autónoma.'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: 'Comunidad de Inteligencia Artificial',
            desc: 'Únete a la vibrante comunidad de hackers de IA y contribuye al avance del potencial humano.'
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
        adaptiveHeight: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (<>
        <NavLight />
        <section className="container mt-12 mb-12 mx-auto w-full max-w-screen-lg overflow-hidden">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal hover-gradient-amber-5 text-2xl leading-normal font-semibold">Hackathon de Inteligencia Artificial SynthetIQ</h3>
                    <p className="text-white font-semibold max-w-xl mx-auto">Involúcrate con tecnologías avanzadas de IA para innovar soluciones en análisis de datos, aprendizaje automático y automatización que transformen industrias y mejoren la vida diaria.</p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {casesData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="relative blur-xl hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                                <div className="relative overflow-hidden h-96 w-full">
                                    <Image src={item.image} alt={item.title} className="object-cover w-full h-full" layout="fill" />
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
                    <h5>Directrices del Concurso</h5>
                </div>
                <HackathonRules />
                <Hackathons />
                <Pricing />
            </div>
            <AINews />
            <AboutThree />
        </section>
        <Footer />
    </>);
}
