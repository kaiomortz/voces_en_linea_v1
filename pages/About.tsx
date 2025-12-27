import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
        Sobre el Proyecto "Voces en Línea"
      </h1>
      <p className="text-lg text-school-700 font-medium mb-8">
        Periódico digital para promover escucha, participación y ciudadanía digital en la escuela.
      </p>

      <div className="prose prose-lg prose-school text-gray-700">
        <p>
          Esta propuesta de intervención institucional se desarrolla en la <strong>Escuela Nº 734 Cóndor Andino</strong> como trabajo final de la Actualización Académica en Procesos de Orientación y Tutoría.
        </p>
        
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Fundamentación</h3>
        <p>
          Partiendo de los aportes de autores como Débora Kantor y Perla Zelmanovich, este proyecto busca abordar las transformaciones contemporáneas en los consumos culturales de adolescentes vinculadas a la tecnología.
        </p>
        <p>
          El periódico digital escolar se entiende como un <strong>dispositivo pedagógico</strong> capaz de:
        </p>
        <ul className="list-none pl-0 space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-school-500 mt-1 flex-shrink-0" size={20} />
            <span>Habilitar la palabra juvenil.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-school-500 mt-1 flex-shrink-0" size={20} />
            <span>Promover prácticas de ciudadanía digital.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-school-500 mt-1 flex-shrink-0" size={20} />
            <span>Fortalecer la convivencia escolar y prevenir el ciberacoso.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-school-500 mt-1 flex-shrink-0" size={20} />
            <span>Articular conocimientos digitales de los jóvenes con la orientación pedagógica de los adultos.</span>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">¿Qué buscamos?</h3>
        <p>
          Buscamos restituir la <em>"asimetría protectora"</em>: ofrecer un marco de cuidado y orientación sin negar la cultura digital de los estudiantes. Queremos que este sea un espacio de encuentro intergeneracional donde se reflexione sobre el consentimiento, la privacidad y el respeto en las redes.
        </p>

        <div className="bg-white p-6 rounded-lg border-l-4 border-school-500 shadow-sm mt-8">
          <p className="italic m-0 text-gray-600">
            "Cuando decimos consumos y producciones culturales nos referimos, entonces, al universo cultural de los pibes... Un universo que corresponde conocer." (Débora Kantor)
          </p>
        </div>
      </div>
    </div>
  );
};