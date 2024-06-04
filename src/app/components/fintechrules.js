'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function SeccionReglas() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const reglas = useMemo(() => ({
    Cometa: [
      {
        title: 'Descripción General de la Categoría Cometa',
        text: 'Los participantes comerciarán en el ámbito de acciones, materias primas y monedas fiduciarias, demostrando su habilidad para navegar en los mercados spot tradicionales. Esta arena pone a prueba la capacidad de un trader para utilizar análisis fundamental y técnico de manera efectiva. Miles de USD en premios. Este concurso es solo para participantes mayores de 18 años.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los traders con cuentas verificadas. Los participantes pueden formar equipos de hasta tres miembros para colaborar en la estrategia y ejecución.',
      },
      {
        title: 'Instrumentos de Trading',
        text: 'Los participantes deben comerciar acciones, materias primas y monedas fiduciarias especificadas. Se proporcionará una lista de instrumentos comerciales elegibles antes del concurso.',
      },
      {
        title: 'Ejecución de Trading',
        text: 'Los traders deben ejecutar transacciones con alta eficiencia y precisión. La velocidad y precisión de la ejecución serán evaluadas.',
      },
      {
        title: 'Análisis de Mercado',
        text: 'Se deben presentar informes detallados de análisis de mercado, que muestren las estrategias y herramientas utilizadas para el trading.',
      },
      {
        title: 'Gestión de Riesgos',
        text: 'Demostrar prácticas robustas de gestión de riesgos. Se valorarán altamente las estrategias que minimicen el riesgo mientras maximizan los rendimientos.',
      },
      {
        title: 'Transparencia e Informes',
        text: 'Los equipos deben proporcionar informes detallados de sus estrategias de trading y resultados. La transparencia es clave para una evaluación justa.',
      },
      {
        title: 'Terrenos del Evento',
        text: 'El concurso de trading tradicional se llevará a cabo antes del evento y los premios se presentarán en los terrenos del evento. Esto permite actividades en tiempo real y networking durante el evento principal.',
      },
      {
        title: 'Tabla de Clasificación en Tiempo Real',
        text: 'Una tabla de clasificación en tiempo real mostrará a los mejores participantes, agregando un elemento de emoción y competencia.',
      },
      {
        title: 'Juicio Final',
        text: 'Los ganadores serán seleccionados en función del desempeño general, innovación y cumplimiento de las reglas del concurso. Los jueces considerarán tanto la rentabilidad como la estrategia.',
      },
      {
        title: 'Entrega de Premios',
        text: 'Después de la ceremonia, los premios en criptomonedas se transfieren directamente a las billeteras digitales de los ganadores. Este proceso es rápido, seguro y asegura que los ganadores puedan acceder a sus fondos sin demora. La transferencia de premios se realiza de manera transparente, con confirmaciones y reconocimientos compartidos con los ganadores.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus profundas historias y estrategias en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, obteniendo un reconocimiento significativo. La ceremonia y el programa ofrecen amplias oportunidades para que los ganadores, participantes y socios fomenten conexiones que se extienden más allá del concurso.',
      }
    ],
    Estelar: [
      {
        title: 'Descripción General de la Categoría Estelar',
        text: 'Aquí, el mercado de futuros convencional espera, donde comprender y pronosticar las direcciones del mercado puede generar retornos significativos. Esta arena exige una profunda comprensión de los indicadores de mercado y los factores económicos que influyen en los precios. Miles de USD en premios. Este concurso es solo para participantes mayores de 18 años.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los traders con cuentas verificadas. Los participantes pueden formar equipos de hasta tres miembros para colaborar en la estrategia y ejecución.',
      },
      {
        title: 'Instrumentos de Trading de Futuros',
        text: 'Los participantes deben comerciar contratos de futuros especificados. Se proporcionará una lista de instrumentos comerciales elegibles antes del concurso.',
      },
      {
        title: 'Ejecución de Trading',
        text: 'Los traders deben ejecutar transacciones con alta eficiencia y precisión. La velocidad y precisión de la ejecución serán evaluadas.',
      },
      {
        title: 'Análisis de Mercado',
        text: 'Se deben presentar informes detallados de análisis de mercado, que muestren las estrategias y herramientas utilizadas para el trading.',
      },
      {
        title: 'Gestión de Riesgos',
        text: 'Demostrar prácticas robustas de gestión de riesgos. Se valorarán altamente las estrategias que minimicen el riesgo mientras maximizan los rendimientos.',
      },
      {
        title: 'Transparencia e Informes',
        text: 'Los equipos deben proporcionar informes detallados de sus estrategias de trading y resultados. La transparencia es clave para una evaluación justa.',
      },
      {
        title: 'Terrenos del Evento',
        text: 'El concurso de trading tradicional se llevará a cabo antes del evento y los premios se presentarán en los terrenos del evento. Esto permite actividades en tiempo real y networking durante el evento principal.',
      },
      {
        title: 'Tabla de Clasificación en Tiempo Real',
        text: 'Una tabla de clasificación en tiempo real mostrará a los mejores participantes, agregando un elemento de emoción y competencia.',
      },
      {
        title: 'Juicio Final',
        text: 'Los ganadores serán seleccionados en función del desempeño general, innovación y cumplimiento de las reglas del concurso. Los jueces considerarán tanto la rentabilidad como la estrategia.',
      },
      {
        title: 'Entrega de Premios',
        text: 'Después de la ceremonia, los premios en criptomonedas se transfieren directamente a las billeteras digitales de los ganadores. Este proceso es rápido, seguro y asegura que los ganadores puedan acceder a sus fondos sin demora. La transferencia de premios se realiza de manera transparente, con confirmaciones y reconocimientos compartidos con los ganadores.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus profundas historias y estrategias en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, obteniendo un reconocimiento significativo. La ceremonia y el programa ofrecen amplias oportunidades para que los ganadores, participantes y socios fomenten conexiones que se extienden más allá del concurso.',
      },
    ]
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
      const nextIndex = (currentRuleIndex + 1) % reglas[selectedCategory].length;
      mostrarRegla(nextIndex);
    }
  }, [currentRuleIndex, selectedCategory, mostrarRegla, reglas]);

  const handlePrev = useCallback(() => {
    if (currentRuleIndex !== null) {
      const prevIndex = (currentRuleIndex - 1 + reglas[selectedCategory].length) % reglas[selectedCategory].length;
      mostrarRegla(prevIndex);
    }
  }, [currentRuleIndex, selectedCategory, mostrarRegla, reglas]);

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
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Cometa')}>
              Reglas Cometa
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Estelar')}>
              Reglas Estelar
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setSelectedCategory(null)}>
              Volver a Categorías
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {reglas[selectedCategory].map((rule, index) => (
                <button key={index} className="bg-green-500 hover-gradient-amber-6 border-green-500 bg-opacity-80 text-white px-4 py-2 rounded" onClick={() => mostrarRegla(index)}>
                  {rule.title}
                </button>
              ))}
            </div>
          </>
        )}
        {currentRuleIndex !== null && (
          <div className="rule-card absolute inset-0 bg-black bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold mb-4">{reglas[selectedCategory][currentRuleIndex].title}</h4>
            <p className="text-lg">{reglas[selectedCategory][currentRuleIndex].text}</p>
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
