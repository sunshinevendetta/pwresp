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
const Pricing = dynamic(() => import('../components/pricingartists'));
const ArtNews = dynamic(() => import('../components/artnews'));
const ArtContest = dynamic(() => import('../components/artcontest'));
const Cloud = dynamic(() => import('../components/cloud'));
const ArtRules = dynamic(() => import('../components/artrules'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/artists.webp',
            title: 'Registro',
            desc: 'Un pase de artista único, que se puede acuñar por 0.001 ETH, sirve como boleto de entrada, si eres estudiante no necesitas pagar las tarifas de acuñación, solo carga tu identificación de la institución o pon el nombre de tu institución para obtener el descuento.'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: 'Formación de Equipo',
            desc: 'Únete a un equipo o construye solo, puedes unirte a grupos preformados o publicar un mensaje para alianzas espontáneas.'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: 'Selección de Desafío',
            desc: 'Selecciona tu arena de desafío o si te sientes valiente opta por la participación cruzada para construir experiencias múltiples.'
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
            desc: 'Envía una documentación detallada del proyecto y un video pitch, evaluado en innovación, ejecución y, valoramos ideas y proyectos sobre la estética.'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: 'Ceremonia de Premiación',
            desc: 'La gloria es tuya en un evento transmitido en vivo que celebra las ideas más brillantes y corona a los reyes de la innovación.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/submit.webp',
            title: 'Elegibilidad',
            desc: 'Abierto globalmente a artistas y grupos mayores de 18 años, o menores de 18 años con consentimiento del tutor firmado en la cadena.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/criteria.webp',
            title: 'Criterios de Envío',
            desc: 'Incluye una descripción detallada del concepto de la obra de arte, herramientas utilizadas y su relevancia. Las presentaciones deben utilizar métodos de arte generativo y cumplir con la fecha límite, Touchdesigner, Hydra, Processing, etc. son bienvenidos junto con métodos de arte tradicionales o desentrañar nuevos híbridos.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/guidelines.webp',
            title: 'Pautas de Contenido y Creatividad',
            desc: 'El arte debe respetar a todos los humanos, evitar política, religión, temas sensibles o violentos, y ser apto para la familia si es erótico. Equilibra la IA con procesos creativos para mejorar el arte, el uso de Mid Journey, Dall-e, RunwayML está permitido pero ve más allá de un simple prompt.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/copyright.webp',
            title: 'Sin Violación de Derechos de Autor',
            desc: 'Las presentaciones deben ser originales y creadas para el concurso. Asegúrate de que todos los componentes sean obtenidos legalmente y respeten los derechos de propiedad intelectual, trabajos anteriores, remixes, modificaciones, alteraciones, derivados y/o similares de obras publicadas están estrictamente prohibidos aunque el titular de los derechos de autor exprese su consentimiento para usarlas, sé creativo y empieza desde cero, es más divertido de esa manera.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/integrations.webp',
            title: 'Integraciones',
            desc: 'Las piezas dinámicas o interactivas deben ser compatibles con tecnologías web como HTML5 y WebGL para mejorar la accesibilidad. Se anima a los artistas a documentar y compartir su proceso creativo, incluidos fragmentos de código y videos detrás de escena/pruebas.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/judges.webp',
            title: 'Proceso de Selección',
            desc: 'Los jueces evaluarán las entradas en función del mérito artístico y técnico, el uso innovador de la tecnología y la adherencia al tema. Además, se otorgará un premio comunitario a la obra de arte que se acuñe más por los asistentes en el evento, asegurando una participación activa y equidad en el proceso de selección.'
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
        <NavLight />
        <Cloud />
        <section className="relative md:py-24 py-16">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Concurso de Arte Prism</h3>
                    <p className="text-white rounded-xl bg-black bg-opacity-50">Explora la cautivadora fusión de matemáticas y arte en nuestro concurso prism. Crea impresionantes obras de arte algorítmicas que encarnen la aceleración. Premio principal: $10,000.</p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {casesData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            (<div className="relative blur-xl hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
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
                        className="slider" />
                </div>
                <div className="my-4 rounded-xl bg-black bg-opacity-50 text-center">
                    <h5>Directrices del Concurso</h5>
                </div>
                <ArtRules />
                <ArtContest />
                <Pricing />
            </div>
            <ArtNews />
            <AboutThree />
        </section>
        <Footer />
    </>);
}
