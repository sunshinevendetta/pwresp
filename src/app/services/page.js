'use client'
import React,{useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))
const AboutThree = dynamic(() => import('../components/aboutThree'))
const Features = dynamic(() => import('../components/features'))


import {FiFileText, FiVideo, FiPauseCircle, FiCamera, FiLayout,FiMessageCircle, FiHexagon} from '../assets/icons/vander'

export default function Services(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    const casesData = [
        {
            icon:FiFileText,
            title:'Publicaciones y Historias',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
        {
            icon:FiVideo,
            title:'Videos AI',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
        {
            icon:FiPauseCircle,
            title:'Audios AI',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
        {
            icon:FiCamera,
            title:'Fotos AI',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
        {
            icon:FiLayout,
            title:'Blogs y Noticias',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
        {
            icon:FiMessageCircle,
            title:'Chatbot AI',
            desc:'La secuencia de frases es ahora tal que muchas campañas y beneficios'
        },
    ]
    return(
        <>
        <NavLight/>
        <section className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/bg/bg-pages.webp')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Casos / Servicios</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Mortal.Ai</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">Casos</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absoluta sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative md:py-24 py-16">
            <Features classlist="container relative"/>
            <AboutThree/>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Casos de Uso</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">La inteligencia artificial hace que sea rápido y fácil crear contenido para tu blog, redes sociales, sitio web y más!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {casesData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 group bg-white dark:bg-slate-900 hover:bg-amber-400/5 dark:hover:bg-amber-400/5 duration-500" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-amber-400/10 group-hover:fill-amber-400/20 duration-500"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-9 text-amber-400 rounded-xl text-2xl flex align-middle justify-center items-center">
                                        <Icon/>
                                    </div>
                                </div>
        
                                <div className="content mt-6">
                                    <Link href="" className="font-semibold text-xl hover:text-amber-400">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    <div className="mt-4">
                                        <Link href="" className="hover:text-amber-400 font-medium duration-500">Leer Más <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}
