'use client';
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import WarningModal from './components/warningmodal';

const Navbar = dynamic(() => import('./components/navbar'));
const Footer = dynamic(() => import('./components/footer'));
const BrandLogo = dynamic(() => import('./components/brandLogo'));
const AboutThree = dynamic(() => import('./components/aboutThree'));
const AiFeatures = dynamic(() => import('./components/aiFeatures'));
const AboutOne = dynamic(() => import('./components/aboutOne'));
const AboutTwo = dynamic(() => import('./components/aboutTwo'));
const Pricing = dynamic(() => import('./components/pricing'));
const Blogs = dynamic(() => import('./components/blogs'));
const Features = dynamic(() => import('./components/features'));
const ThreeBg = dynamic(() => import('./three/page'), { ssr: false });
const Frens = dynamic(() => import('./components/frens'));

export default function IndexThree() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set dark mode as default
    const darkModeButton = document.querySelector('.dark-mode-btn');
    if (darkModeButton) {
      darkModeButton.click();
    }
  }, []);

  return (
    <>
      <WarningModal />
      <Navbar />
      <section className="relative md:py-48 py-36 items-center mt-[74px] md:rounded-3xl overflow-hidden">
        <div className="absolute top-0 start-0 w-full h-full z-10" ref={containerRef}>
          <ThreeBg containerRef={containerRef} />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </section>
      <section className="pt-6">
        <BrandLogo />
      </section>

      <section className="relative md:pb-24 pb-16">
        <AboutThree />
        <Features classlist="container relative md:mt-24 mt-16" />
        <AboutOne />
        <AboutTwo />
        <AiFeatures />
     <Frens />
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Tickets</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Elige entre nuestra gama de opciones de boletos diseñadas para satisfacer tus necesidades y presupuesto. No te pierdas esta experiencia transformadora.</p>
    <button className="px-6 py-3 mt-6 bg-purple-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none"onClick={() => window.open('https://tally.so/r/mD104p', '_blank')}>
    Si eres artista, estudiante, hacker o trader haz clic aquí para obtener un ENTRADA GRATIS
</button>
      
    </div>
          <Pricing />
        </div>
        <Blogs />
      </section>
      <Footer />
    </>
  );
}
