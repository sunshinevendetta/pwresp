'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

export default function SeccionReglas() {
  const [indiceReglaActual, setIndiceReglaActual] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const reglas = useMemo(() => ({
    Fractal: [
      {
        title: 'Descripción de la Categoría Fractal',
        text: 'Fractal invita a los artistas a aprovechar el poder de los algoritmos, el código y los procesos digitales para crear obras que den vida al tema de la aceleración. Esta categoría desafía a los participantes a combinar la visión artística con la creatividad computacional, resultando en piezas dinámicas que evolucionan y resuenan con los espectadores. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad',
        text: 'Abierto a artistas y grupos colaborativos de cualquier parte del mundo. Deben tener 18 años o más, o contar con el consentimiento de un tutor si son menores de 18.',
      },
      {
        title: 'Criterios de Presentación',
        text: 'Los artistas deben incluir una descripción completa que resalte los fundamentos conceptuales de la pieza, las herramientas tecnológicas y los procesos utilizados, y su relevancia con el tema de la aceleración.',
      },
      {
        title: 'Técnicas Generativas',
        text: 'Debe utilizar predominantemente métodos de arte generativo, donde el código y los algoritmos sean esenciales para el proceso creativo. Esto incluye imágenes estáticas, animaciones dinámicas y obras interactivas.',
      },
      {
        title: 'Contenido Respetuoso',
        text: 'Las obras no deben contener contenido que menosprecie o discrimine a ningún grupo, religión o postura política. Deben evitar temas sensibles o controvertidos.',
      },
      {
        title: 'Creatividad sobre Dependencia de IA',
        text: 'Las presentaciones deben demostrar una combinación armoniosa de IA con otros procesos creativos o tecnologías. El objetivo es asegurar que la obra refleje un esfuerzo creativo multifacético en lugar de depender únicamente del contenido generado por IA.',
      },
      {
        title: 'Sin Violación de Derechos de Autor',
        text: 'Todas las entradas deben ser el trabajo original del artista que presenta, creado específicamente para el concurso Vivid. Cada elemento utilizado en la obra debe ser legalmente obtenido o creado por el artista.',
      },
      {
        title: 'Fecha Límite de Presentación',
        text: 'Todas las entradas deben ser presentadas antes de la fecha límite especificada. Las presentaciones tardías no serán consideradas para la evaluación.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias en Power 2 The People: Trade Arena Magazine y plataformas asociadas, obteniendo un reconocimiento significativo.',
      },
    ],
    Prism: [
      {
        title: 'Descripción de la Categoría Prism',
        text: 'Prism busca artistas que puedan conceptualizar y producir obras que interpreten de manera reflexiva el tema de la aceleración de la sociedad, con un fuerte énfasis en la integración de la tecnología y la innovación artística. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad',
        text: 'Abierto a artistas y grupos colaborativos de cualquier parte del mundo. Deben tener 18 años o más, o contar con el consentimiento de un tutor si son menores de 18.',
      },
      {
        title: 'Criterios de Presentación',
        text: 'Los artistas deben incluir una descripción completa que resalte los fundamentos conceptuales de la pieza, las herramientas tecnológicas y los procesos utilizados, y su relevancia con el tema de la aceleración.',
      },
      {
        title: 'Arte en los Terrenos del Evento',
        text: 'Los terrenos del evento Accelerate servirán como una galería inmersiva para las obras Vivid, con espacios designados para instalaciones interactivas, pantallas digitales y piezas físicas que encarnan el tema del concurso.',
      },
      {
        title: 'Exhibición en la Fachada del WTC',
        text: 'Las obras seleccionadas de Fractal y Prism se exhibirán en la fachada del World Trade Center, transformando esta estructura icónica en un lienzo de innovación digital y brillantez artística.',
      },
      {
        title: 'El Edificio como Lienzo',
        text: 'Los terrenos del evento, incluyendo estructuras e instalaciones, pueden ser utilizados como lienzos para exhibir arte. Este enfoque no solo integra el arte de manera fluida en el entorno del evento, sino que también anima a los artistas a pensar más allá de los espacios de exhibición tradicionales.',
      },
      {
        title: 'Contenido Respetuoso',
        text: 'Las obras no deben contener contenido que menosprecie o discrimine a ningún grupo, religión o postura política. Deben evitar temas sensibles o controvertidos.',
      },
      {
        title: 'Sin Violación de Derechos de Autor',
        text: 'Todas las entradas deben ser el trabajo original del artista que presenta, creado específicamente para el concurso Vivid. Cada elemento utilizado en la obra debe ser legalmente obtenido o creado por el artista.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias en Power 2 The People: Trade Arena Magazine y plataformas asociadas, obteniendo un reconocimiento significativo.',
      },
    ],
  }), []);

  const mostrarRegla = useCallback((index) => {
    setIndiceReglaActual(index);
    gsap.fromTo('.tarjeta-regla', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  const ocultarRegla = useCallback(() => {
    gsap.to('.tarjeta-regla', { opacity: 0, y: 50, duration: 0.5, onComplete: () => setIndiceReglaActual(null) });
  }, []);

  const handleNext = useCallback(() => {
    if (indiceReglaActual !== null) {
      const nextIndex = (indiceReglaActual + 1) % reglas[categoriaSeleccionada].length;
      mostrarRegla(nextIndex);
    }
  }, [indiceReglaActual, categoriaSeleccionada, reglas, mostrarRegla]);

  const handlePrev = useCallback(() => {
    if (indiceReglaActual !== null) {
      const prevIndex = (indiceReglaActual - 1 + reglas[categoriaSeleccionada].length) % reglas[categoriaSeleccionada].length;
      mostrarRegla(prevIndex);
    }
  }, [indiceReglaActual, categoriaSeleccionada, reglas, mostrarRegla]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleSwipe = (e) => {
      const direction = e.deltaX > 0 ? 'right' : 'left';
      if (direction === 'right') handleNext();
      if (direction === 'left') handlePrev();
    };

    window.addEventListener('swiped', handleSwipe);
    return () => window.removeEventListener('swiped', handleSwipe);
  }, [handleNext, handlePrev]);

  return (
    <section className="panel green mx-auto text-center relative h-auto py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          Reglas
        </h3>
        {!categoriaSeleccionada ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setCategoriaSeleccionada('Fractal')}>
              Reglas de Fractal
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setCategoriaSeleccionada('Prism')}>
              Reglas de Prism
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setCategoriaSeleccionada(null)}>
              Volver a Categorías
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {reglas[categoriaSeleccionada].map((regla, index) => (
                <button key={index} className="bg-green-500 hover-gradient-amber-6 border-green-500 bg-opacity-80 text-white px-4 py-2 rounded" onClick={() => mostrarRegla(index)}>
                  {regla.title}
                </button>
              ))}
            </div>
          </>
        )}
        {indiceReglaActual !== null && (
          <div className="tarjeta-regla absolute inset-0 bg-black bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold mb-4">{reglas[categoriaSeleccionada][indiceReglaActual].title}</h4>
            <p className="text-lg">{reglas[categoriaSeleccionada][indiceReglaActual].text}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={ocultarRegla}>Cerrar</button>
            <div className="flex mt-4">
              <button className="px-4 py-2 bg-gray-500 text-white rounded mx-2" onClick={handlePrev}>Anterior</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded mx-2" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
