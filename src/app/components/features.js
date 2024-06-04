import React from "react";
import Image from "next/image";

export default function Caracteristicas({classlist}){
    const featuresData = [
        {
            image:'/images/features/video-1.webp',
            title:"El futuro es OnChain.",
            desc:"Blockchain, Bitcoin, Crypto, Web3 y la tokenización de activos del mundo real están a punto de revolucionar las cosas. Prepárate para presenciar una revolución digital que está desbloqueando finanzas, arte, movimientos sociales y devolviendo el poder a la gente."
        },
        {
            image:'/images/features/video-2.webp',
            title:"Desatando la Evolución Humana: Biohacking.",
            desc:"El biohacking es el arte de vanguardia de optimizar tu mente, cuerpo y vida. Desbloquea tu potencial sobrehumano con herramientas y técnicas innovadoras. ¡Bienvenido a la era de la evolución autodirigida!"
        },
        
        {
            image:'/images/features/video-3.webp',
            title:"Trading: Moldeando el Futuro de las Finanzas.",
            desc:"Descubre las tecnologías de vanguardia y las estrategias innovadoras que están revolucionando las finanzas. Desde el trading algorítmico hasta las inversiones impulsadas por IA, explora la democratización de los mercados financieros y su potencial para moldear la sociedad. Sumérgete en las tendencias transformadoras y su impacto en las economías globales."
        },
        {
            image:'/images/features/video-4.webp',
            title:"La Revolución Será Automatizada.",
            desc:"Desde fábricas hasta granjas, estas tecnologías de vanguardia están transformando las industrias como nunca antes. Con robots e IA que pueden pensar, aprender y adaptarse, estamos entrando en una nueva era de eficiencia e innovación. Prepárate para presenciar la revolución de la automatización desarrollarse ante tus ojos."
        },
    ]
    return(
        <>
            <div className={classlist}>
                <div className="grid grid-cols-1 pb-6 mt-6 text-center bg-transparent rounded-lg">
                    <h3 className=" font-bold text-4xl"><span className="bg-gradient-to-br from-green-600 to-fuchsia-400 text-transparent bg-clip-text hover-gradient-amber-5">Vertical</span> <span className="bg-gradient-to-br from-fuchsia-400 to-green-600 text-transparent bg-clip-text hover-gradient-amber-6">Topics</span></h3>

                    <p className="p-6 bg-gradient-to-br from-green-200 to-fuchsia-400 text-transparent bg-clip-text hover-gradient-amber-5 font-semibold text-xl">Bitcoin - Crypto - Web3 - DeFi - RWA - Redes Sociales Descentralizadas <br/> Tokens - Gaming - Talleres - Ponentes - Biohacking
 <br/> Arte OnChain - Hackatones - Torneo de Trading <br/> Inteligencia Artificial - Robótica <br/> Tecnología Cuántica </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featuresData.map((item,index) => {
                        return(
                        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800  hover-gradient-amber-5 filter" key={index}>
                            <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt=""/>
                            </div>

                            <div className="p-6">
                                <h5 className="text-lg font-semibold bg-gradient-to-br from-fuchsia-400 to-green-600 text-transparent bg-clip-text hover-gradient-amber-6 ">{item.title}</h5>
                                <p className="text-slate-200 mt-3 ">{item.desc}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
