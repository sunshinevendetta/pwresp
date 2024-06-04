'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Mecha: [
      {
        title: 'Visión General de la Categoría Mecha',
        text: 'La categoría "Mecha" marca una nueva era de competencia en "Trade Arena", invitando a los participantes a aprovechar el poder de la inteligencia artificial y las estrategias algorítmicas. Los concursantes desarrollarán y desplegarán bots de trading de IA en un entorno simulado, demostrando el potencial de los sistemas automatizados para superar a los traders humanos mediante la precisión analítica y la velocidad. Miles de dólares en premios.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos, desde traders experimentados hasta principiantes entusiastas. Los participantes pueden competir como traders individuales o en equipos de hasta cinco miembros, fomentando tanto el brillo individual como la estrategia colaborativa.',
      },
      {
        title: 'Pantalla P&L en Vivo',
        text: 'Una característica innovadora que muestra las ganancias y pérdidas en tiempo real en los terrenos del evento, agregando un elemento atractivo y transparente al concurso.',
      },
      {
        title: 'Terrenos Exclusivos del Evento',
        text: 'El concurso se desarrolla exclusivamente durante el evento "Accelerate", asegurando una atmósfera de competencia inmersiva llena de innovación y emoción.',
      },
      {
        title: 'Criterio de Evaluación: Rentabilidad',
        text: 'La medida principal del éxito, recompensando a los mayores ganadores en cada arena.',
      },
      {
        title: 'Criterio de Evaluación: Estrategia e Innovación',
        text: 'Reconoce el uso creativo y efectivo de estrategias y herramientas de trading.',
      },
      {
        title: 'Criterio de Evaluación: Gestión de Riesgos',
        text: 'Evalúa la capacidad de los participantes para equilibrar operaciones ambiciosas con estrategias de riesgo prudentes.',
      },
      {
        title: 'Fuentes de Datos',
        text: 'Todos los bots de trading deben usar fuentes de datos disponibles públicamente y legalmente permisibles. Los bots que usen datos privados o propietarios sin autorización serán descalificados.',
      },
      {
        title: 'Juego Justo',
        text: 'Los bots deben operar independientemente sin intervención humana durante la competencia. Los ajustes manuales o las modificaciones durante los períodos de trading activo están estrictamente prohibidos.',
      },
      {
        title: 'Transparencia',
        text: 'Los participantes deben presentar un informe detallado de la estrategia y los principios operativos de su algoritmo antes de que comience la competencia. Esto asegura transparencia y una evaluación justa.',
      },
      {
        title: 'Consideraciones Éticas',
        text: 'Los algoritmos deben adherirse a prácticas comerciales éticas. Las estrategias explotadoras que manipulen las condiciones del mercado o violen las regulaciones de intercambio resultarán en una descalificación inmediata.',
      },
      {
        title: 'Estabilidad Técnica',
        text: 'Los bots deben ser probados a fondo para garantizar que puedan manejar fuentes de datos en tiempo real y ejecutar operaciones sin fallas técnicas. Los bots inestables o poco confiables serán descalificados.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias profundas en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, ganando un reconocimiento significativo. La ceremonia y el programa ofrecen oportunidades profundas para los ganadores, participantes y socios para fomentar conexiones que se extienden más allá del concurso.',
      },
    ],
    Nova: [
      {
        title: 'Visión General de la Categoría Nova',
        text: 'Navega el paisaje fluido de los intercambios descentralizados y aprovecha estrategias de vanguardia como préstamos flash y ejecución de creadores de mercado automatizados en entornos multi-cadena. La única regla es no usar bots. Miles de dólares en premios.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los traders. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Pantalla P&L en Vivo',
        text: 'Pantalla en tiempo real de ganancias y pérdidas para mejorar la transparencia y el compromiso.',
      },
      {
        title: 'Terrenos Exclusivos del Evento',
        text: 'El concurso se lleva a cabo exclusivamente durante el evento "Accelerate", asegurando un entorno de competencia enfocado e inmersivo.',
      },
      {
        title: 'Criterio de Evaluación: Rentabilidad',
        text: 'La medida principal del éxito, con recompensas para los mayores ganadores.',
      },
      {
        title: 'Criterio de Evaluación: Estrategia e Innovación',
        text: 'Reconocimiento a las estrategias de trading creativas y efectivas.',
      },
      {
        title: 'Criterio de Evaluación: Gestión de Riesgos',
        text: 'Evaluación de la capacidad de los participantes para gestionar el riesgo de manera efectiva.',
      },
      {
        title: 'Cumplimiento',
        text: 'Todas las actividades de trading deben cumplir con las leyes y regulaciones pertinentes.',
      },
      {
        title: 'Trading Ético',
        text: 'Los traders deben adherirse a estándares éticos, evitando prácticas manipuladoras o explotadoras.',
      },
      {
        title: 'Integridad de los Datos',
        text: 'Las operaciones deben basarse en fuentes de datos precisas y verificables.',
      },
      {
        title: 'Transparencia',
        text: 'Los participantes deben proporcionar un informe detallado de sus estrategias de trading y procesos de toma de decisiones.',
      },
      {
        title: 'Sin Bots',
        text: 'Solo trading manual; el uso de bots está estrictamente prohibido.',
      },
      {
        title: 'Programa Post-Ceremonia',
        text: 'Los ganadores comparten sus historias y estrategias profundas en "Power 2 The People: Trade Arena Magazine" y plataformas asociadas, ganando un reconocimiento significativo. La ceremonia y el programa ofrecen oportunidades profundas para los ganadores, participantes y socios para fomentar conexiones que se extienden más allá del concurso.',
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
        <Image src="/images/blog/specialrules.webp" alt="Imagen de fondo" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          Reglas
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Mecha')}>
              Reglas Mecha
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Nova')}>
              Reglas Nova
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
