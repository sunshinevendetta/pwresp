'use client'
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import('../components/navlight'))
const Footer = dynamic(() => import('../components/footer'))
const AboutThree = dynamic(() => import('../components/aboutThree'))
const ClientsTwo = dynamic(() => import('../components/clientTwo'))
const Pricing = dynamic(() => import('../components/pricing'))

export default function Pricings() {
    return (
        <>
            <NavLight />
            <section className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: "url('/images/bg/bg-pages.webp')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-6">
                        <div>
                            <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Boletos</h5>
                        </div>

                        <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                            <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Inicio</Link></li>
                            <li className="inline-block text-base text-white/50 mx-0.5"><i className="mdi mdi-chevron-right"></i></li>
                            <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">Precios</li>
                        </ul>
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

            <section className="relative md:pb-24 pb-16">
                <AboutThree />
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Selecciona Tus Boletos</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Cada boleto te da acceso a diferentes niveles, áreas, eventos paralelos, eventos de exposición y actividades relacionadas.</p>
                    </div>
                    <Pricing />
                </div>
            </section>
            <Footer />
        </>
    )
}
