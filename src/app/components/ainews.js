import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../data/data";

export default function Blogs() {
  // Filtrar datos del blog para incluir solo entradas con etiquetas "Artificial Intelligence" o "Hackathon"
  const filteredBlogData = blogData.filter(item =>
    item.tags && (item.tags.includes("Artificial Intelligence") || item.tags.includes("Hackathon"))
  );

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-2xl md:leading-normal text-2xl leading-normal font-semibold">Noticias de Inteligencia Artificial</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Perspectivas centradas en la Inteligencia Artificial y Hackathons para impulsar tus innovaciones.</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredBlogData.slice(0, 4).map((item, index) => {
            return (
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={index}>
                <Image src={item.image} alt={item.title} layout="responsive" width={500} height={300} className="rounded-md shadow dark:shadow-gray-700" />
                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    {item.tags.map((tag, tagIndex) => (
                      <Link key={tagIndex} href={`/tags/${tag}`} className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link href={`/news/${item.id}`} className="text-lg font-semibold hover:text-amber-400">
                      {item.title}
                    </Link>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <Image src={item.client} width={28} height={28} className="rounded-full mr-2" alt={item.author} />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      {new Date(item.date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
