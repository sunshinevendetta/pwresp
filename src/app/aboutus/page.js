'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(() => import('../components/footer'))
const Blogs = dynamic(() => import('../components/blogs'))

export default function AboutUs(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex,setActiveIndex] = useState(0)
    const teamData = [
        {
            image:'/images/team/joseluis.webp',
            name:"Jose Luis Perez",
            title:'C.E.O'
        },
        {
            image:'/images/team/porras.webp',
            name:"José Carlos Porras",
            title:'Director Creativo'
        },
        {
            image:'/images/team/sv.webp',
            name:"SV",
            title:'Even Director - Lead Dev'
        },
        {
            image:"/images/team/ricardo.webp",
            name:"Ricardo Pérez",
            title:'Director de Ventas'
        },
        {
            image:"/images/team/alain.webp",
            name:"Alain Olvera",
            title:'PR - Enlaces'
        },
        {
            image:'/images/team/damian.webp',
            name:"Damian Diaz",
            title:'Dirección Administrativa'
        },
        {
            image:'/images/team/jaen.webp',
            name:"Jaen Paniagua",
            title:'Director de Operaciones'
        },
        {
            image:'/images/team/ayax.webp',
            name:"Ayax Velázquez",
            title:'Ventas'
        },
        {
            image:'/images/team/fer.webp',
            name:"Fer Elosegui",
            title:'Chief Of Business Development'
        },
        {
            image:'/images/team/kevin.webp',
            name:"Kevin",
            title:'Ventas'
        },
    ]
    return(
        <>
        <NavLight/>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
     
            
            <div className="container relative md:mt-24 mt-16">
                
                <div className="lg:flex justify-center">
                <div className="lg:w-4/5">
  <div className="text-center mb-6">
    <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Reinos Personalizados</h5>
  </div>
  <ul className="md:flex shadow hover:shadow-md dark:shadow-slate-800 inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
    <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
    <button className={`${activeIndex === 0 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(0)}>
  <h5 className="text-base font-semibold">Inspira</h5>
  <p className="text-sm mt-1">Muestra cómo transformaste el mundo. Este es tu combustible.</p>
</button>
</li>
<li role="presentation" className="inline-block md:w-1/3 w-full p-2">
  <button className={`${activeIndex === 1 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(1)}>
    <h5 className="text-base font-semibold">Educa</h5>
    <p className="text-sm mt-1">Difunde tu sabiduría para los intrépidos. Sin requisitos previos, solo potencial.</p>
  </button>
</li>
<li role="presentation" className="inline-block md:w-1/3 w-full p-2">
  <button className={`${activeIndex === 2 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(2)} >
    <h5 className="text-base font-semibold">Empodera</h5>
    <p className="text-sm mt-1">Destacando las ideas más audaces del juego. Aquí, los sueños se hacen realidad.</p>
  </button>
</li>
<li role="presentation" className="inline-block md:w-1/3 w-full p-2">
  <button className={`${activeIndex === 3 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(3)}>
    <h5 className="text-base font-semibold">Área de Juegos</h5>
    <p className="text-sm mt-1">Para los que se atreven, para sumergirse y conquistar. Desafía el status quo.</p>
  </button>
</li>
<li role="presentation" className="inline-block md:w-1/3 w-full p-2">
  <button className={`${activeIndex === 4 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(4)}>
    <h5 className="text-base font-semibold">Comunidad</h5>
    <p className="text-sm mt-1">Organiza un lugar para tu comunidad, crea actividades especiales y genera recuerdos increíbles.</p>
  </button>
</li>
<li role="presentation" className="inline-block md:w-1/3 w-full p-2">
  <button className={`${activeIndex === 5 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(5)} >
    <h5 className="text-base font-semibold">Mercado</h5>
    <p className="text-sm mt-1">Compra y vende RWA por tokens y viceversa, obtén arte físico en la cadena, mercancía, productos, esta es la tienda de la esquina del evento, hay una regla: <br/> <br/> SOLO SE ACEPTAN PAGOS EN CRIPTO.</p>
  </button>
</li>
  </ul>
    
  <div id="StarterContent" className="mt-6">
    {activeIndex === 0 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/1.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
    {activeIndex === 1 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/2.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
    {activeIndex === 2 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/3.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
    {activeIndex === 3 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/4.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
    {activeIndex === 4 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/5.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
    {activeIndex === 5 ? 
      <div>
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
          <Image src="/images/6.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
        </div>
      </div> :''
    }
  </div>
</div>
</div>
</div>

<div className="container relative md:mt-24 mt-16">
    <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">El Equipo</h3>

        <p className="text-slate-400 max-w-xl mx-auto">El equipo de Power 2 The People es un grupo diverso de visionarios e innovadores apasionados por empoderar a las personas y transformar la sociedad a través de un evento transformador.</p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        {teamData.map((item,index)=>{
            return(
                <div className="overflow-hidden relative w-full mx-auto bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-slate-800 rounded-md flex items-center duration-500" key={index}>
                    <Image src={item.image} width={100} height={100} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" className="absolute -start-10 w-40 h-40 rounded-full shadow-lg" />
                    <div className="min-w-0 py-10 ps-36 pe-6">
                        <p className="text-lg font-medium hover:text-amber-400">{item.name}</p>
                        <p className="text-slate-400">{item.title}</p>
                    </div>
                </div>
            )
        })}
    </div>
</div>

<Blogs/>
</section>
<Footer/>
</>
)
}
