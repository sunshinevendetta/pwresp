import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaUserTie, FaUsersCog } from "react-icons/fa";

const ToggleButton = dynamic(() => import('./toggleButton'));

export default function AboutThree() {
  const countryData = [
    {
      name: "English",
      image: "/images/flags/usa.webp",
      domain: "https://pwr2tp.mx"
    },
    {
      name: "Español",
      image: "/images/flags/mex.webp",
      domain: "https://mx.pwr2tp.mx"
    },
    {
      name: "हिंदी",
      image: "/images/flags/india.webp",
      domain: "https://pwr2tp.mx"
    },
    {
      name: "中文",
      image: "/images/flags/china.webp",
      domain: "https://pwr2tp.mx"
    },
    {
      name: "Deutsch",
      image: "/images/flags/germany.webp",
      domain: "https://pwr2tp.mx"
    },
    {
      name: "العربية",
      image: "/images/flags/uae.webp",
      domain: "https://pwr2tp.mx"
    }
  ];

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative overflow-hidden p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-slate-800">
            <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
              <div className="relative">
                <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                  <source src="/images/cdmx.webm" type="video/webm" />
                </video>
                <Link href="https://pwr2tp.mx" className="absolute top-2 left-2 rounded-full p-0.1 bg-white dark:bg-slate-900 shadow dark:shadow-slate-800 z-10">
                  <Image src="/images/flags/usa.webp" width={28} height={28} className="h-7 w-7 rounded-full" alt="" />
                </Link>
              </div>
            </div>

            <div className="mt-6">
              {countryData.map((item, index) => (
                <Link
                  href={item.domain}
                  className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5"
                  key={index}
                >
                  <Image src={item.image} width={20} height={20} className="h-5 w-5 me-1" alt="" /> {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl my-8 bg-black bg-size-full bg-opacity-70 p-6 md:p-8">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">8-9 de Febrero, 2025 <br />CDMX</h3>
            <p className="text-slate-400 max-w-xl">Colonia Nápoles, un territorio privilegiado junto a los distritos más vibrantes de la CDMX: Roma, Condesa, Polanco, donde la exclusividad se encuentra con la conveniencia.</p>
            <h1 className="mb-4 md:text-1xl md:leading-normal text-1xl leading-normal font-semibold"><br />La Arena</h1>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center"><FaUserTie className="text-amber-400 h-10 w-10 me-2" /> World Trade Center: <br /> Icono de América Latina, desempeñando un papel crucial en la narrativa para los titanes del negocio.</li>
              <li className="mb-2 flex items-center"><FaUsersCog className="text-amber-400 h-10 w-10 me-2" /> Operacional todo el año: <br /> El centro para ferias comerciales, exposiciones, congresos, conciertos, eventos privados y mucho más.</li>
            </ul>

            <div className="font-sans mt-4">
              <ToggleButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
