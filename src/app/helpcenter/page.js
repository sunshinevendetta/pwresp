'use client';
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FiHelpCircle, FiBookmark, FiSettings, FiHexagon } from '../assets/icons/vander';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));

export default function Helpcenter() {
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const aboutData = useMemo(() => [
        {
            icon: FiHelpCircle,
            title: 'FAQs',
            desc: 'Información básica, cómo funciona, precios y más',
        },
        {
            icon: FiBookmark,
            title: 'Guías / Soporte',
            desc: 'Próximamente',
        },
    ], []);

    const accordianData = useMemo(() => [
        {
            id: 1,
            title: '¿Qué es Power 2 The People?',
            desc: 'Power 2 The People (PWR2TP) es un evento que incluye hackathons, torneos de trading, concursos de arte, expos y sesiones de oradores.',
        },
        {
            id: 2,
            title: '¿Cómo puedo registrarme para el evento?',
            desc: 'Puedes registrarte para el evento a través de nuestro sitio web siguiendo el proceso de registro descrito en la sección de guías.',
        },
        {
            id: 3,
            title: '¿Qué actividades están disponibles en el evento?',
            desc: 'El evento incluye hackathons, torneos de trading, concursos de arte, expos y sesiones de oradores.',
        },
        {
            id: 4,
            title: '¿Cómo puedo participar en el hackathon?',
            desc: 'Para participar en el hackathon, debes registrarte para el evento y seguir las directrices proporcionadas en la sección de soporte.',
        },
        {
            id: 5,
            title: '¿Cuál es el total del premio del evento?',
            desc: 'El total del premio del evento es de $110,000 USD, distribuidos en varias categorías de hackathon.',
        },
        {
            id: 6,
            title: '¿Cuáles son las diferentes categorías del hackathon?',
            desc: 'Las categorías del hackathon incluyen SyntehIQ (AI Hackathon), Anon Empire (Web3 Hackathon), LifeCode (Biohacking Hackathon) y Automate (Robotics Hackathon).',
        },
        {
            id: 7,
            title: '¿Cuál es la duración del evento?',
            desc: 'El evento es un maratón de 48 horas de innovación, diseñado para desafiar, inspirar y elevar a los participantes.',
        },
        {
            id: 8,
            title: '¿Cómo se seleccionan los ganadores?',
            desc: 'Los ganadores se seleccionan en función de la innovación y creatividad, ejecución y presentación. Se requieren documentación detallada del proyecto, un prototipo funcional y un pitch en video convincente para la evaluación.',
        },
        {
            id: 9,
            title: '¿Qué apoyo está disponible durante el evento?',
            desc: 'Los participantes tienen acceso a luminarias de la industria para mentoría, una gran cantidad de herramientas, API y datos de nuestros socios.',
        },
        {
            id: 10,
            title: '¿Cómo puedo contactar con el soporte?',
            desc: 'Para soporte, puedes contactarnos en contacto@dfb.mx.',
        },
        {
            id: 11,
            title: '¿Cuáles son las fechas del evento?',
            desc: 'El evento se llevará a cabo el 7 y 8 de septiembre de 2024, en Ciudad de México.'
        },
        {
            id: 12,
            title: '¿Dónde se encuentra el evento?',
            desc: 'El evento se encuentra en Ciudad de México, en el World Trade Center.'
        },
        {
            id: 13,
            title: '¿Hay un límite de edad para los participantes?',
            desc: 'Los participantes deben tener al menos 18 años para registrarse en el evento.'
        },
        {
            id: 14,
            title: '¿Hay paquetes de alojamiento disponibles?',
            desc: 'Sí, ofrecemos paquetes de alojamiento que se pueden reservar a través de nuestro sitio web.'
        },
        {
            id: 15,
            title: '¿Cuáles son los premios del hackathon?',
            desc: 'El hackathon ofrece un total de premios de $110,000 USD, distribuidos en varias categorías.'
        },
        {
            id: 16,
            title: '¿Cómo se distribuyen los premios?',
            desc: 'Los premios se otorgan a los mejores equipos en cada categoría, según los criterios de evaluación.'
        },
        {
            id: 17,
            title: '¿Pueden participar participantes internacionales en el evento?',
            desc: 'Sí, el evento está abierto a participantes de todo el mundo.'
        },
        {
            id: 18,
            title: '¿Cuál es la tarifa de inscripción?',
            desc: 'La tarifa de inscripción varía según el paquete seleccionado y el alojamiento.'
        },
        {
            id: 19,
            title: '¿Se proporcionan comidas durante el evento?',
            desc: 'Sí, se proporcionan comidas y refrigerios a todos los participantes registrados.'
        },
        {
            id: 20,
            title: '¿Cuáles son los criterios de evaluación para el hackathon?',
            desc: 'Los criterios de evaluación incluyen innovación y creatividad, ejecución y presentación.'
        },
        {
            id: 21,
            title: '¿Puedo registrarme como individuo o como equipo?',
            desc: 'Puedes registrarte como individuo o como parte de un equipo. Los tamaños de los equipos pueden variar.'
        },
        {
            id: 22,
            title: '¿Hay talleres previos al evento?',
            desc: 'Sí, habrá varios talleres antes del evento principal. Los detalles se anunciarán en nuestro sitio web.'
        },
        {
            id: 23,
            title: '¿Cómo puedo obtener actualizaciones sobre el evento?',
            desc: 'Puedes suscribirte a nuestro boletín o seguirnos en las redes sociales para las últimas actualizaciones.'
        },
        {
            id: 24,
            title: '¿Qué medidas de seguridad están en su lugar para el evento?',
            desc: 'Tenemos medidas de seguridad completas, incluidas revisiones de salud y estaciones de saneamiento.'
        },
        {
            id: 25,
            title: '¿Puedo ser voluntario en el evento?',
            desc: 'Sí, damos la bienvenida a los voluntarios. Puedes postularte a través de nuestro sitio web.'
        },
        {
            id: 26,
            title: '¿Cuáles son los beneficios de participar en el hackathon?',
            desc: 'Los participantes obtienen exposición, mentoría, oportunidades de networking y la oportunidad de ganar premios.'
        },
        {
            id: 27,
            title: '¿Hay un programa de mentoría durante el evento?',
            desc: 'Sí, los participantes tendrán acceso a expertos de la industria para orientación y mentoría.'
        },
        {
            id: 28,
            title: '¿Cuál es el horario del evento?',
            desc: 'El horario detallado se publicará en nuestro sitio web más cerca de la fecha del evento.'
        },
        {
            id: 29,
            title: '¿Hay oportunidades de networking?',
            desc: 'Sí, el evento incluye múltiples sesiones de networking con líderes de la industria y otros participantes.'
        },
        {
            id: 30,
            title: '¿Qué debo llevar al evento?',
            desc: 'Los participantes deben llevar sus propios portátiles, cargadores y cualquier otro equipo necesario.'
        },
        {
            id: 31,
            title: '¿Cómo presento mi proyecto?',
            desc: 'Los proyectos se pueden presentar a través de nuestro portal en línea al final del hackathon.'
        },
        {
            id: 32,
            title: '¿Cuál es el formato de las sesiones de oradores?',
            desc: 'Las sesiones de oradores incluyen discursos de apertura, paneles y sesiones de preguntas y respuestas con expertos de la industria.'
        },
        {
            id: 33,
            title: '¿Cómo puedo prepararme para el hackathon?',
            desc: 'Recomendamos revisar los recursos y las pautas proporcionadas en nuestro sitio web y asistir a talleres previos al evento.'
        },
        {
            id: 34,
            title: '¿Qué herramientas y APIs están disponibles para los participantes?',
            desc: 'Los participantes tendrán acceso a una variedad de herramientas, APIs y datos de nuestros socios.'
        },
        {
            id: 35,
            title: '¿Cómo me uno al torneo de trading?',
            desc: 'Los detalles sobre cómo unirse al torneo de trading se proporcionarán en la sección de guías de nuestro sitio web.'
        },
        {
            id: 36,
            title: '¿Cuáles son las reglas para el concurso de arte?',
            desc: 'Las reglas y pautas para el concurso de arte estarán disponibles en nuestro sitio web.'
        },
        {
            id: 37,
            title: '¿Puedo mostrar mi proyecto en la expo?',
            desc: 'Sí, los proyectos seleccionados tendrán la oportunidad de ser exhibidos en la expo.'
        },
        {
            id: 38,
            title: '¿Hay becas de viaje disponibles?',
            desc: 'Ofrecemos becas de viaje limitadas para participantes que necesiten asistencia financiera.'
        },
        {
            id: 39,
            title: '¿Cuál es la política de reembolso para las tarifas de inscripción?',
            desc: 'Nuestra política de reembolso se detalla en la página de registro de nuestro sitio web.'
        },
        {
            id: 40,
            title: '¿Cómo puedo mantenerme conectado después del evento?',
            desc: 'Los participantes pueden mantenerse conectados a través de nuestra plataforma comunitaria y eventos futuros.'
        },
        {
            id: 41,
            title: '¿Quiénes son los patrocinadores del evento?',
            desc: 'El evento está patrocinado por empresas líderes en los sectores de tecnología e innovación. Una lista completa está disponible en nuestro sitio web.'
        },
        {
            id: 42,
            title: '¿Cómo puedo convertirme en patrocinador?',
            desc: 'Las organizaciones interesadas en patrocinar el evento pueden contactarnos a través de la página de patrocinio en nuestro sitio web.'
        }
    ], []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData([]);
        } else {
            setFilteredData(accordianData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())));
        }
    }, [searchQuery, accordianData]);

    const handleAccordionClick = (id) => {
        setActiveIndex(activeIndex === id ? -1 : id);
    };

    useEffect(() => {
        gsap.to('.accordion-content', {
            height: 'auto',
            duration: 0.3,
            ease: 'power1.inOut',
            stagger: 0.1
        });
    }, [activeIndex]);

    return (
        <>
            <NavLight />
            <section className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: "url('/images/bg/bg-pages.webp')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-6">
                        <div>
                            <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">¡Hola! <br /> ¿Cómo podemos ayudarte?</h5>
                        </div>

                        <div className="text-center subcribe-form mt-4 pt-2">
                            <form className="relative mx-auto max-w-xl">
                                <input 
                                    type="text" 
                                    id="help" 
                                    name="name" 
                                    className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" 
                                    placeholder="Busca tus preguntas o tema..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="button" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white rounded-md">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 my-0 gap-6">
                        {
                            aboutData.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div className="text-center px-6 mt-6" key={index}>
                                        <Icon className="text-5xl mb-4 text-amber-400" />
                                        <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Comienza</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">La inteligencia artificial hace que sea rápido y fácil crear contenido para tu blog, redes sociales, sitio web y más.</p>
                    </div>

                    <div className="lg:flex justify-center mt-6">
                        <div className="lg:w-2/3">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold">
                                            <button type="button" onClick={() => handleAccordionClick(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                <span>{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                                            </button>
                                        </h2>
                                        <div className={`accordion-content ${activeIndex === item.id ? "" : "hidden"}`}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                accordianData.map((item, index) => (
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold">
                                            <button type="button" onClick={() => handleAccordionClick(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                <span>{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                                            </button>
                                        </h2>
                                        <div className={`accordion-content ${activeIndex === item.id ? "" : "hidden"}`}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
