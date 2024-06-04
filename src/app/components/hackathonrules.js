'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    SyntehIQ: [
      {
        title: 'Descripción General de SyntehIQ',
        text: 'Un crisol para las innovaciones de IA que se enfocan en el análisis predictivo, el aprendizaje automático y la automatización inteligente, ofreciendo $25,000 para proyectos que impulsen el avance de la sociedad.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por la IA. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Envío',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de IA. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas revolucionarias y enfoques novedosos en IA.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación fluida y experiencia de usuario de las soluciones de IA.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a una selección de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    LifeCode: [
      {
        title: 'Descripción General de LifeCode',
        text: 'Una frontera para los biohackers, ofreciendo $15,000 a aquellos que puedan revolucionar la genética, la tecnología usable o nuevos paradigmas de salud para mejorar las capacidades humanas y la longevidad.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los biohackers y entusiastas. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Envío',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de biohacking. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas revolucionarias y enfoques novedosos en biohacking.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación fluida y experiencia de usuario de las soluciones de biohacking.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a una selección de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    Automate: [
      {
        title: 'Descripción General de Automate',
        text: 'Esta arena, con un premio de $20,000, llama a las innovaciones en robótica que presentan soluciones novedosas para la industria, la salud o el uso personal, mejorando la eficiencia y la sinergia humano-máquina.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los entusiastas y profesionales de la robótica. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Envío',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones robóticas. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas revolucionarias y enfoques novedosos en robótica.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación fluida y experiencia de usuario de las soluciones robóticas.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a una selección de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      }
    ],
  }), []);

  const mostrarRegla = useCallback((index) => {
    setCurrentRuleIndex(index);
    gsap.fromTo('.rule-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  const ocultarRegla = useCallback(() => {
    gsap.to('.rule-card', { opacity: 0, y: 50, duration: 0.5, onComplete: () => setCurrentRuleIndex(null) });
  }, []);

  const handleNext = useCallback(() => {
    if (currentRuleIndex !== null) {
      const nextIndex = (currentRuleIndex + 1) % rules[selectedCategory].length;
      mostrarRegla(nextIndex);
    }
  }, [currentRuleIndex, selectedCategory, mostrarRegla, rules]);

  const handlePrev = useCallback(() => {
    if (currentRuleIndex !== null) {
      const prevIndex = (currentRuleIndex - 1 + rules[selectedCategory].length) % rules[selectedCategory].length;
      mostrarRegla(prevIndex);
    }
  }, [currentRuleIndex, selectedCategory, mostrarRegla, rules]);

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
        <Image src="/images/blog/fintechfuture.webp" alt="Imagen de Fondo" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          Reglas
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('SyntehIQ')}>
              Reglas de SyntehIQ
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('LifeCode')}>
              Reglas de LifeCode
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Automate')}>
              Reglas de Automate
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setSelectedCategory(null)}>
              Volver a Categorías
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {rules[selectedCategory].map((rule, index) => (
                <button key={index} className="bg-green-500 hover-gradient-amber-6 border-green-500 bg-opacity-80 text-white px-4 py-2 rounded" onClick={() => mostrarRegla(index)}>
                  {rule.title}
                </button>
              ))}
            </div>
          </>
        )}
        {currentRuleIndex !== null && (
          <div className="rule-card absolute inset-0 bg-black bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold mb-4">{rules[selectedCategory][currentRuleIndex].title}</h4>
            <p className="text-lg">{rules[selectedCategory][currentRuleIndex].text}</p>
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
