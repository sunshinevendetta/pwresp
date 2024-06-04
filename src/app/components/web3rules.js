'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    DeFi: [
      {
        title: 'Descripción General de DeFi',
        text: 'Innovaciones que redefinen las finanzas, enfatizando la seguridad, inclusión y eficiencia. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por las finanzas descentralizadas. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Presentación',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones DeFi. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas innovadoras y enfoques novedosos en las finanzas descentralizadas.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación y experiencia de usuario impecables de las soluciones DeFi.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a un grupo de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    Gaming: [
      {
        title: 'Descripción General de Gaming',
        text: 'Juegos basados en blockchain que ofrecen verdadera propiedad, gobernanza y una experiencia inmersiva. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por los juegos en blockchain. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Presentación',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de juegos. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas innovadoras y enfoques novedosos en los juegos en blockchain.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación y experiencia de usuario impecables de las soluciones de juegos.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a un grupo de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    RedesSocialesDescentralizadas: [
      {
        title: 'Descripción General de Redes Sociales Descentralizadas',
        text: 'Plataformas que priorizan el control del usuario, la privacidad y la libertad de expresión. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por las redes sociales descentralizadas. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Presentación',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de redes sociales descentralizadas. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas innovadoras y enfoques novedosos en redes sociales descentralizadas.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación y experiencia de usuario impecables de las soluciones de redes sociales descentralizadas.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a un grupo de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    ZkTech: [
      {
        title: 'Descripción General de Zk Tech',
        text: 'Soluciones que utilizan pruebas de conocimiento cero para mejorar la privacidad y la seguridad. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por Zk Tech. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Presentación',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de Zk Tech. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas innovadoras y enfoques novedosos en Zk Tech.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación y experiencia de usuario impecables de las soluciones de Zk Tech.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a un grupo de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
    ElectrodomesticosWeb3: [
      {
        title: 'Descripción General de Electrodomésticos Web3',
        text: 'Aplicaciones reales de tecnologías Web3 que conectan lo digital con lo físico, mejorando la vida cotidiana. Premio: $10,000.',
      },
      {
        title: 'Elegibilidad y Registro',
        text: 'Abierto a todos los participantes apasionados por los electrodomésticos Web3. Los participantes pueden competir individualmente o en equipos de hasta cinco miembros.',
      },
      {
        title: 'Desarrollo y Presentación',
        text: 'Los participantes tienen 48 horas para idear, desarrollar y prototipar sus soluciones de electrodomésticos Web3. Las presentaciones deben incluir documentación detallada del proyecto, un prototipo funcional y un video pitch convincente.',
      },
      {
        title: 'Criterios de Evaluación: Innovación y Creatividad',
        text: 'Ideas innovadoras y enfoques novedosos en electrodomésticos Web3.',
      },
      {
        title: 'Criterios de Evaluación: Ejecución',
        text: 'Implementación y experiencia de usuario impecables de las soluciones de electrodomésticos Web3.',
      },
      {
        title: 'Criterios de Evaluación: Presentación',
        text: 'La capacidad de articular y vender la visión de manera efectiva.',
      },
      {
        title: 'Recursos y Mentoría',
        text: 'Acceso a un grupo de luminarias de la industria y un tesoro de herramientas, API y datos, cortesía de nuestros socios, para impulsar el motor de la innovación.',
      },
    ],
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
        <Image src="/images/blog/specialrules.webp" alt="Imagen de Fondo" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          Reglas
        </h3>
        <p className="text-white mb-6">Este concurso tiene 5 subcategorías. Selecciona una subcategoría para ver las reglas.</p>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('DeFi')}>
              Reglas de DeFi
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Gaming')}>
              Reglas de Gaming
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('RedesSocialesDescentralizadas')}>
              Reglas de Redes Sociales Descentralizadas
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('ZkTech')}>
              Reglas de Zk Tech
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('ElectrodomesticosWeb3')}>
              Reglas de Electrodomésticos Web3
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
