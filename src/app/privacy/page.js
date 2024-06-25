'use client';
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importaciones dinámicas para mejor rendimiento
const NavLight = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

export default function Privacy() {
  const [signers, setSigners] = useState([]);
  const [showSigners, setShowSigners] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
      <NavLight />
      <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">Política de Privacidad</h5>
            </div>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize font-medium duration-500 ease-in-out hover:text-amber-400"><Link href="/">Inicio</Link></li>
              <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
              <li className="inline-block capitalize font-medium duration-500 ease-in-out text-amber-400" aria-current="page">Privacidad</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">Descripción general :</h5>
                <p className="text-slate-400">
                  Power 2 The People (PWR2TP) se compromete a proteger tu privacidad. Esta Política de Privacidad describe cómo manejamos tu información personal durante el evento, que incluye hackatones, torneos de trading, concursos de arte, exposiciones y sesiones de ponentes.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Recopilación y uso de información :</h5>
                <p className="text-slate-400">
                  Recopilamos información personal que proporcionas voluntariamente cuando te registras para el evento, participas en actividades o te comunicas con nosotros. Esto incluye tu nombre, datos de contacto y cualquier otra información que decidas proporcionar.
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Facilitar el registro y la participación en el evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Proporcionar actualizaciones e información relacionadas con el evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Asegurar el cumplimiento de las normas y regulaciones del evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Mejorar la experiencia del evento y mejorar futuros eventos</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Facilitar la creación de redes y la colaboración entre los participantes</li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">Compartir y divulgar información :</h5>
                <p className="text-slate-400">
                  No compartimos tu información personal con terceros, excepto cuando sea necesario para llevar a cabo el evento, cumplir con la ley o proteger nuestros derechos. Tu información puede ser compartida con socios y patrocinadores del evento para los fines de prestación de servicios del evento.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Seguridad :</h5>
                <p className="text-slate-400">
                  Implementamos medidas técnicas y organizativas adecuadas para proteger tu información personal contra la destrucción, pérdida, alteración, divulgación o acceso accidental o ilegal.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Retención de datos :</h5>
                <p className="text-slate-400">
                  Tu información personal será retenida solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada o según lo requiera la ley.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Tus derechos :</h5>
                <p className="text-slate-400">
                  Tienes el derecho de acceder, corregir o eliminar tu información personal. Si tienes alguna inquietud sobre tus datos o esta política de privacidad, por favor contáctanos en contacto@dfb.mx.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Consentimiento para grabaciones :</h5>
                <p className="text-slate-400">
                  Al participar en los eventos de PWR2TP, das tu consentimiento para la grabación de tu imagen, voz y participación. Estas grabaciones pueden ser utilizadas con fines promocionales, incluyendo pero no limitado a redes sociales, sitios web y marketing de futuros eventos.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Cambios a esta Política de Privacidad :</h5>
                <p className="text-slate-400">
                  Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política de privacidad en nuestro sitio web. Tu participación continuada en el evento constituye tu aceptación de la nueva política de privacidad.
                </p>

                <div className="mt-8">
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold mb-4"></h5>
                    <ul className="list-disc text-slate-400 ml-5">
                      {signers.map((signer, index) => (
                        <li key={index}>{signer}</li>
                      ))}
                    </ul>
                  </div>
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
