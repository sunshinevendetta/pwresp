import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, RiTwitterXLine, FiMail, FiFileText } from '../assets/icons/vander';

export default function Footer() {
    return (
        <>
            <div className="relative">
                <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <footer className="relative overflow-hidden bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: "url('/images/bg/bg-footer.webp')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
                <div className="container-fluid relative md:py-24 py-16">
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center">
                            <div className="">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">¿Quieres Ser Patrocinador?</h4>
                                <div className="mt-6">
                                    <Link href="/contact" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-800 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 text-white rounded-md">Únete a Nosotros</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative text-center">
                    <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
                        <div className="py-[30px] px-0">
                            <div className="grid md:grid-cols-2 items-center">
                                <div className="md:text-start text-center">
                                    <Link href="#" className="text-[22px] focus:outline-none">
                                        <Image src="/images/logo-light.webp" width={127} height={24} className="mx-auto md:me-auto md:ms-0" alt="Logo" />
                                    </Link>
                                </div>

                                <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-1">
                                    <li className="inline">
                                        <Link href="/pricing" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <FiShoppingCart className="h-4 w-4 align-middle" />
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="https://www.instagram.com/pwr2tpmx" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <FiInstagram className="h-4 w-4 align-middle" />
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="https://twitter.com/pwr2tpmx" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <RiTwitterXLine className="h-4 w-4 align-middle" />
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="mailto:omar@dfb.com" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <FiMail className="h-4 w-4 align-middle" />
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="https://hey.xyz/pwr2tpmx" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <Image src="/images/Icon-T-White.svg" alt="Icono de Mail" width={16} height={16} />
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="https://warpcaster.com/pwr2tpmx" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                                            <Image src="/images/transparent-white.svg" alt="Icono de Archivo" width={16} height={16} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
                    <div className="container relative text-center">
                        <div className="grid grid-cols-1">
                            <div className="text-center">
                                <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Diseñado con <i className="mdi mdi-heart text-orange-700"></i> por <Link href="https://twitter.com/sunshinevndetta/" target="_blank" className="text-reset">@sunshinevendetta</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
