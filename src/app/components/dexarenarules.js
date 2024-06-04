'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function SeccionDeReglas() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Lunar: [
      {
        title: 'Resumen de la Categoría Lunar',
        text: 'Domina la precisión de predecir y capitalizar los movimientos futuros del mercado en intercambios centralizados. Miles de USD en premios. Este concurso es solo para participantes mayores de 18 años.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los traders con cuentas verificadas. Los participantes pueden formar equipos de hasta tres miembros para colaborar en la estrategia y ejecución.',
      },
      {
        title: 'Pares de Comercio',
        text: 'Los participantes deben negociar pares específicos en intercambios centralizados. Se proporcionará una lista de pares comerciales elegibles antes del concurso.',
      },
      {
        title: 'Precisión en la Predicción',
        text: 'Los traders deben predecir los movimientos futuros del mercado con alta precisión. Las predicciones se evaluarán según su exactitud y rentabilidad.',
      },
      {
        title: 'Análisis de Mercado',
        text: 'Deben presentarse informes detallados de análisis de mercado, que muestren las estrategias y herramientas utilizadas para la predicción del mercado.',
      },
      {
        title: 'Gestión de Riesgos',
        text: 'Demostrar prácticas de gestión de riesgos robustas. Las estrategias que minimicen el riesgo mientras maximizan los rendimientos serán altamente valoradas.',
      },
      {
        title: 'Transparencia e Informes',
        text: 'Los equipos deben proporcionar informes detallados de sus estrategias y resultados comerciales. La transparencia es clave para una evaluación justa.',
      },
      {
        title: 'Lugar del Evento',
        text: 'El concurso se lleva a cabo durante el "Lunar Summit", ofreciendo un ambiente dinámico y atractivo para los participantes.',
      },
      {
        title: 'Tabla de Clasificación en Tiempo Real',
        text: 'Una tabla de clasificación en tiempo real mostrará a los mejores participantes, añadiendo un elemento de emoción y competencia.',
      },
      {
        title: 'Evaluación Final',
        text: 'Los ganadores serán seleccionados en base al rendimiento general, la innovación y la adherencia a las reglas del concurso. Los jueces considerarán tanto la rentabilidad como la estrategia.',
      },
      {
        title: 'Entrega de Premios',
        text: 'Después de la ceremonia, los premios en criptomonedas se transfieren directamente a las billeteras digitales de los ganadores. Este proceso es transparente, seguro y garantiza que los ganadores puedan acceder a sus fondos sin demora. La transferencia de premios se realiza de manera transparente, con confirmaciones y reconocimientos compartidos con los ganadores.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias profundas en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, obteniendo un reconocimiento significativo. La ceremonia y el programa ofrecen oportunidades profundas para que los ganadores, participantes y socios fomenten conexiones que se extienden más allá del concurso.',
      }
    ],
    Solar: [
      {
        title: 'Resumen de la Categoría Solar',
        text: 'Domina el arte del comercio al contado en criptomonedas utilizando plataformas centralizadas, donde los movimientos inmediatos del mercado pueden dictar el éxito. Miles de USD en premios. Este concurso es solo para participantes mayores de 18 años.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los traders con cuentas verificadas. Los participantes pueden formar equipos de hasta tres miembros para colaborar en la estrategia y ejecución.',
      },
      {
        title: 'Pares de Comercio al Contado',
        text: 'Los participantes deben negociar pares específicos en intercambios centralizados. Se proporcionará una lista de pares comerciales elegibles antes del concurso.',
      },
      {
        title: 'Ejecución Comercial',
        text: 'Los traders deben ejecutar operaciones al contado con alta eficiencia y precisión. Se evaluará la velocidad y precisión de la ejecución.',
      },
      {
        title: 'Análisis de Mercado',
        text: 'Deben presentarse informes detallados de análisis de mercado, que muestren las estrategias y herramientas utilizadas para el comercio al contado.',
      },
      {
        title: 'Gestión de Riesgos',
        text: 'Demostrar prácticas de gestión de riesgos robustas. Las estrategias que minimicen el riesgo mientras maximizan los rendimientos serán altamente valoradas.',
      },
      {
        title: 'Transparencia e Informes',
        text: 'Los equipos deben proporcionar informes detallados de sus estrategias y resultados comerciales. La transparencia es clave para una evaluación justa.',
      },
      {
        title: 'Lugar del Evento',
        text: 'El concurso se lleva a cabo durante el "Solar Summit", ofreciendo un ambiente dinámico y atractivo para los participantes.',
      },
      {
        title: 'Tabla de Clasificación en Tiempo Real',
        text: 'Una tabla de clasificación en tiempo real mostrará a los mejores participantes, añadiendo un elemento de emoción y competencia.',
      },
      {
        title: 'Evaluación Final',
        text: 'Los ganadores serán seleccionados en base al rendimiento general, la innovación y la adherencia a las reglas del concurso. Los jueces considerarán tanto la rentabilidad como la estrategia.',
      },
      {
        title: 'Entrega de Premios',
        text: 'Después de la ceremonia, los premios en criptomonedas se transfieren directamente a las billeteras digitales de los ganadores. Este proceso es transparente, seguro y garantiza que los ganadores puedan acceder a sus fondos sin demora. La transferencia de premios se realiza de manera transparente, con confirmaciones y reconocimientos compartidos con los ganadores.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias profundas en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, obteniendo un reconocimiento significativo. La ceremonia y el programa ofrecen oportunidades profundas para que los ganadores, participantes y socios fomenten conexiones que se extienden más allá del concurso.',
      },
    ]
  }), []);

  const showRule = useCallback((index) => {
    setCurrentRuleIndex(index);
    gsap.fromTo('.rule-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  const hideRule = useCallback(() => {
    gsap.to('.rule-card', { opacity: 0, y: 50, duration: 0.5, onComplete: () => setCurrentRuleIndex(null) });
  }, []);

  const handleNext = useCallback(() => {
    if (currentRuleIndex !== null) {
      const nextIndex = (currentRuleIndex + 1) % rules[selectedCategory].length;
      showRule(nextIndex);
    }
  }, [currentRuleIndex, selectedCategory, showRule, rules]);

  const handlePrev = useCallback(() => {
    if (currentRuleIndex !== null) {
      const prevIndex = (currentRuleIndex - 1 + rules[selectedCategory].length) % rules[selectedCategory].length;
      showRule(prevIndex);
    }
  }, [currentRuleIndex, selectedCategory, showRule, rules]);

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
        <Image src="/images/blog/tradepass.webp" alt="Imagen de fondo" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          Reglas
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Lunar')}>
              Reglas Lunar
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Solar')}>
              Reglas Solar
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setSelectedCategory(null)}>
              Volver a Categorías
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {rules[selectedCategory].map((rule, index) => (
                <button key={index} className="bg-green-500 hover-gradient-amber-6 border-green-500 bg-opacity-80 text-white px-4 py-2 rounded" onClick={() => showRule(index)}>
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
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={hideRule}>Cerrar</button>
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
