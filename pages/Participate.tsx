import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Participate: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-green-100 text-green-800 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">¡Gracias por participar!</h2>
          <p>Tu propuesta ha sido enviada al equipo editorial docente. Nos pondremos en contacto pronto para avanzar con la idea.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Enviar otra propuesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">¡Tu Voz Cuenta!</h1>
        <p className="text-lg text-gray-600">
          Este periódico se construye con la participación de todos. Si tenés una idea para una nota, querés realizar una entrevista, compartir una foto o un video, completá el siguiente formulario.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre y Apellido</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-500 focus:border-school-500" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Año y División</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-500 focus:border-school-500">
                <option>1° Año</option>
                <option>2° Año</option>
                <option>3° Año</option>
                <option>4° Año</option>
                <option>5° Año</option>
                <option>6° Año</option>
                <option>Docente / Familia</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sección Sugerida</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-500 focus:border-school-500">
              <option>Noticias</option>
              <option>Opinión</option>
              <option>Entrevistas</option>
              <option>Deportes</option>
              <option>Cultura</option>
              <option>Convivencia / ESI</option>
              <option>Ambiente</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">¿De qué te gustaría hablar?</label>
            <textarea 
              required 
              rows={5} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-500 focus:border-school-500"
              placeholder="Contanos brevemente tu idea..."
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">Recordá que todas las publicaciones deben respetar los Acuerdos Escolares de Convivencia.</p>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-school-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-school-800 transition-colors shadow-lg shadow-school-500/30"
            >
              <Send size={20} />
              Enviar Propuesta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};