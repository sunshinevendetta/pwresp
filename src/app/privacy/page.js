"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Web3 from "web3";

// Importaciones dinámicas para un mejor rendimiento
const NavLight = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

// Detalles de la cadena Base
const BASE_CHAIN_ID = '0x14a34'; // ID de la cadena Base Sepolia
const BASE_CHAIN_PARAMS = {
  chainId: BASE_CHAIN_ID,
  chainName: 'Base Sepolia',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://base-sepolia-rpc.publicnode.com'] // Reemplazar con la URL real de RPC
};

// Detalles del contrato inteligente
const CONTRACT_ADDRESS = "0x32bDdf6D9aB4f97cC1C560C9A2b7b9bf676cB5Cf";
const CONTRACT_ABI = [
  {"inputs":[{"internalType":"string","name":"_termsBase64","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Signed","type":"event"},
  {"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getSignature","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getSigners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasSigned","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"signTerms","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"signers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"termsBase64","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"stateMutability":"payable","type":"receive"}
];

export default function Privacy() {
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [signers, setSigners] = useState([]);
  const [showSigners, setShowSigners] = useState(false);
  const [signCheckMessage, setSignCheckMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const checkIfSigned = useCallback(async () => {
    if (account && typeof window.ethereum !== 'undefined') {
      try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        const signed = await contract.methods.hasSigned(account).call();
        setHasSigned(signed);
        setSignCheckMessage(signed ? 'Has firmado los términos.' : 'No has firmado los términos.');
      } catch (error) {
        console.error("Error verificando la firma: ", error);
        setSignCheckMessage('Error verificando la firma.');
      }
    }
  }, [account]);

  const fetchSigners = useCallback(async () => {
    if (account && typeof window.ethereum !== 'undefined') {
      try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        const signersList = await contract.methods.getSigners().call();
        setSigners(signersList);
        setShowSigners(true);
      } catch (error) {
        console.error("Error obteniendo los firmantes: ", error);
      }
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      checkIfSigned();
      fetchSigners();
    }
  }, [account, checkIfSigned, fetchSigners]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        await switchToBaseChain();
      } catch (error) {
        console.error("Error conectando a la billetera: ", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Por favor instala una billetera MetaMask para usar esta función.");
    }
  };

  const switchToBaseChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: BASE_CHAIN_ID }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [BASE_CHAIN_PARAMS],
          });
        } catch (addError) {
          console.error("Error añadiendo la cadena Base Sepolia: ", addError);
        }
      } else {
        console.error("Error cambiando a la cadena Base Sepolia: ", switchError);
      }
    }
  };

  const signTerms = async () => {
    if (account && typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        await contract.methods.signTerms().send({ from: account });
        setHasSigned(true);
        fetchSigners();
        console.log("Términos firmados");
      } catch (error) {
        console.error("Error firmando los términos: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

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
                <h5 className="text-xl font-semibold mb-4">Visión General :</h5>
                <p className="text-slate-400">
                  Power 2 The People (PWR2TP) se compromete a proteger tu privacidad. Esta Política de Privacidad describe cómo manejamos tu información personal durante el evento, que incluye hackathons, torneos de trading, concursos de arte, exposiciones y sesiones de conferencias.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Recopilación y Uso de la Información :</h5>
                <p className="text-slate-400">
                  Recopilamos información personal que proporcionas voluntariamente cuando te registras para el evento, participas en actividades o te comunicas con nosotros. Esto incluye tu nombre, datos de contacto y cualquier otra información que decidas proporcionar.
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Facilitar el registro y la participación en el evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Proporcionar actualizaciones e información relacionadas con el evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Asegurar el cumplimiento de las reglas y regulaciones del evento</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Mejorar la experiencia del evento y mejorar eventos futuros</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Facilitar la creación de redes y la colaboración entre los participantes</li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">Compartición y Divulgación de la Información :</h5>
                <p className="text-slate-400">
                  No compartimos tu información personal con terceros, excepto cuando sea necesario para llevar a cabo el evento, cumplir con la ley o proteger nuestros derechos. Tu información puede ser compartida con socios y patrocinadores del evento con el fin de proporcionar servicios relacionados con el evento.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Seguridad :</h5>
                <p className="text-slate-400">
                  Implementamos medidas técnicas y organizativas adecuadas para proteger tu información personal contra la destrucción, pérdida, alteración, divulgación o acceso accidental o ilegal.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Retención de Datos :</h5>
                <p className="text-slate-400">
                  Tu información personal se conservará solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada o según lo requiera la ley.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Tus Derechos :</h5>
                <p className="text-slate-400">
                  Tienes derecho a acceder, corregir o eliminar tu información personal. Si tienes alguna inquietud sobre tus datos o esta política de privacidad, comunícate con nosotros a contacto@dfb.mx.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Consentimiento para Grabaciones :</h5>
                <p className="text-slate-400">
                  Al participar en los eventos de PWR2TP, consientes la grabación de tu imagen, voz y participación. Estas grabaciones pueden ser utilizadas con fines promocionales, incluidos pero no limitados a redes sociales, sitios web y marketing de futuros eventos.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Cambios en Esta Política de Privacidad :</h5>
                <p className="text-slate-400">
                  Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva política de privacidad en nuestro sitio web. Tu participación continua en el evento constituye tu aceptación de la nueva política de privacidad.
                </p>

                <div className="mt-8">
                  {!account ? (
                    <button onClick={connectWallet} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">
                      {isLoading ? 'Conectando...' : 'Conectar Billetera'}
                    </button>
                  ) : (
                    <button onClick={signTerms} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">
                      {isLoading ? 'Firmando...' : 'Firmar para Aceptar'}
                    </button>
                  )}
                  {hasSigned && (
                    <div className="mt-4 text-green-500">
                      ¡Firma registrada! Puedes proceder.
                      <Link href="https://members.pwr2tp.mx" className="ml-4 py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-400 hover:bg-green-500 border-green-400 hover:border-green-500 text-white rounded-md">Continuar a la Creación de Perfil</Link>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <button onClick={checkIfSigned} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-400 hover:bg-blue-500 border-blue-400 hover:border-blue-500 text-white rounded-md">
                    Verificar Si Está Firmado
                  </button>
                  {signCheckMessage && (
                    <div className="mt-4 text-blue-500">
                      {signCheckMessage}
                    </div>
                  )}
                </div>
                
                <div className="mt-8">
                  <button onClick={fetchSigners} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-400 hover:bg-purple-500 border-purple-400 hover:border-purple-500 text-white rounded-md">
                    Obtener Firmantes
                  </button>
                  {showSigners && (
                    <div className="mt-4">
                      <h5 className="text-xl font-semibold mb-4">Lista de Firmantes :</h5>
                      <ul className="list-disc text-slate-400 ml-5">
                        {signers.map((signer, index) => (
                          <li key={index}>{signer}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
