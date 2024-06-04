'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

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

const TradingSlider = () => {
    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/tradepass.webp',
            title: 'Inscripción',
            desc: 'La tarifa de inscripción de 0.005 ETH incluye una insignia de comerciante + $10M USD virtuales para operar en un entorno de simulación sin riesgo.'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/tradeformation.webp',
            title: 'Formación de Equipos',
            desc: 'Compite solo o únete a un equipo de hasta cinco comerciantes, fomentando tanto el brillo individual como la estrategia colaborativa.'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/tradechallenge.webp',
            title: 'Selección de Desafíos',
            desc: 'Elige tu arena de desafíos, cada una diseñada para probar diferentes aspectos del trading, spot o futuros.'
        },
        {
            icon: FaTools,
            image: '/images/blog/tradepro.webp',
            title: 'Herramientas de Trading',
            desc: 'La alimentación de precios refleja las condiciones del mercado en tiempo real sin retrasos, asegurando una experiencia de trading auténtica.'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/tradejudge.webp',
            title: 'Criterios de Evaluación',
            desc: 'Evaluado en rentabilidad, estrategia, innovación y gestión de riesgos. La pantalla de P&L en vivo agrega transparencia y participación.'
        },
        {
            icon: FaAward,
            image: '/images/blog/tradeaward.webp',
            title: 'Ceremonia de Premios',
            desc: 'Celebra a los comerciantes finos en un evento transmitido en vivo con premios otorgados a los mejores intérpretes.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/tradefutures.webp',
            title: 'Futuros',
            desc: 'Céntrate en predecir y capitalizar los movimientos futuros del mercado dentro de los intercambios centralizados utilizando trading con margen y apalancamiento.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/tradespot.webp',
            title: 'Spot',
            desc: 'Domina el arte del trading spot en plataformas centralizadas, donde los movimientos inmediatos del mercado dictan el éxito.'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: 'Comunidad de Comerciantes',
            desc: 'Únete a la vibrante comunidad de comerciantes y contribuye a potenciar el potencial humano a través de la innovación.'
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
        prevArrow: <CustomPrevArrow />
    };

    return (
        <section className="container  mt-12 mb-12 mx-auto w-full max-w-screen-lg overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                {casesData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div className="relative p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                            <div className="relative blur-xl hover:blur-none overflow-hidden h-96 w-full">
                                <Image src={item.image} alt={item.title} className="opacity-80 object-cover w-full h-full" layout="fill" />
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
        </section>
    );
}

export default TradingSlider;
