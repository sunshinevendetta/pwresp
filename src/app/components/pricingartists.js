import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FiCheckCircle, AiOutlineClose } from '../assets/icons/vander';

export default function Pricing() {
  const [selectedCrypto, setSelectedCrypto] = useState('MXN');
  const [selectedCryptoBusiness, setSelectedCryptoBusiness] = useState('MXN');
  const [selectedCryptoDiamond, setSelectedCryptoDiamond] = useState('MXN'); 
  const [ethPrice, setEthPrice] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);
  const usdcPrice = 50;
  const mxnPrice = 500;
  const [businessPriceMXN, setBusinessPriceMXN] = useState(3500);
  const businessPriceUSDC = 150;
  const [diamondPriceMXN, setDiamondPriceMXN] = useState(35000); 
  const diamondPriceUSDC = 3500;
  const [selectedCategory, setSelectedCategory] = useState('Artistas');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd')
      .then(response => {
        setEthPrice(response.data.ethereum.usd);
        setBtcPrice(response.data.bitcoin.usd);
      })
      .catch(error => {
        console.error('Error fetching prices:', error);
      });
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto mt-6 gap-6">
        <div className="relative overflow-hidden rounded-md shadow bg-black bg-opacity-50 dark:shadow-gray-800">
          <div className="p-6">
            <h5 className="text-2xl leading-normal font-semibold">Artistas</h5>
            <p className="text-white mt-2">Para aquellos que se atreven a construir la gloria y demostrar que son los mejores</p>
            <div className="flex mt-4">
              <span className="text-lg font-semibold">Ξ</span>
              <span className="text-5xl font-semibold mb-0 ms-1">0</span>
              <span className="text-lg font-semibold ms-2"> / 0 USDC / 0 ₿ / 0 MXN </span>
            </div>
            <div className="mt-6 flex items-center">
              <button
                className={`py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded ${selectedCategory === 'Artistas' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
                onClick={() => setSelectedCategory('Artistas')}
              >
                Artistas
              </button>
              <Link href="https://tally.so/r/mD104p" target="_blank">
                <button className="py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded">Registrar</button>
              </Link>
              <Link href="https://tally.so/r/mD104p" target="_blank">
                <button className="py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duración-500 text-base text-center rounded">Estudiante</button>
              </Link>
              <Link href="https://tally.so/r/mD104p" target="_blank">
                <button className="py-2 px-5 font-semibold tracking-wide border align-middle duración-500 text-base text-center rounded">Más Información</button>
              </Link>
            </div>
          </div>
          <div className="p-6 bg-black bg-opacity-70 rounded-xl">
            <ul className="list-none text-slate-400">
              <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">Características:</li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Acceso a la Exposición de 2 Días</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Perfil Social y Regalos de PWR2TP</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Misiones y Recompensas en el Sitio</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Acceso Completo a Eventos Secundarios</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Conferencias Seleccionadas</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Kit Especial con Herramientas Profesionales</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Coleccionable POAP en Cadena</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Área Especial para Construir</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Participación en Concursos para ganar +100K USD en Premios</span>
              </li>
            </ul>
          </div>
        </div>           
      </div>           
    </>    
  );
}
