import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Newspaper, Facebook, Instagram, Mail, Info, Lock } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
  'Noticias', 'Entrevistas', 'Cultura', 'Opinión', 'Convivencia', 'ESI', 'Ambiente', 'Deportes'
];

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-school-700 font-bold" : "text-gray-600 hover:text-school-500";

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Top Bar */}
      <div className="bg-school-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Escuela Nº 734 Cóndor Andino</span>
          <span>Lago Puelo, 2025</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-school-700 p-2 rounded text-white group-hover:bg-school-500 transition-colors">
                <Newspaper size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gray-900 leading-none tracking-tight">Voces en Línea</span>
                <span className="text-xs text-school-700 font-medium tracking-wide mt-1">PERIÓDICO DIGITAL ESCOLAR</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              <Link to="/" className={isActive("/")}>Inicio</Link>
              <Link to="/about" className={isActive("/about")}>El Proyecto</Link>
              <Link to="/participate" className="bg-school-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-school-900 transition shadow-sm">
                ¡Participá!
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories Bar (Desktop) */}
        <div className="hidden md:block border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-8 py-3 text-sm font-medium whitespace-nowrap">
              {categories.map((cat) => (
                <Link 
                  key={cat} 
                  to={`/category/${cat}`}
                  className="text-gray-500 hover:text-school-700 transition-colors uppercase tracking-wider text-xs"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-3 text-base font-medium text-gray-900 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-3 text-base font-medium text-gray-900 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre el Proyecto
              </Link>
              <div className="pt-2">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Secciones</p>
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat}`}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-school-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
              <div className="pt-4 px-3">
                 <Link to="/participate" className="block w-full text-center bg-school-700 text-white px-4 py-3 rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>
                  ¡Quiero Participar!
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-school-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="text-school-100" />
              <span className="font-serif text-xl font-bold">Voces en Línea</span>
            </div>
            <p className="text-school-100 text-sm leading-relaxed mb-4">
              Un espacio para la escucha, la participación y la ciudadanía digital.
              Promoviendo la convivencia escolar y la alfabetización crítica.
            </p>
            <div className="text-xs text-school-100 opacity-70">
              <p>Trabajo Final Módulo N°5</p>
              <p>Actualización Académica en Procesos de Orientación y Tutoría</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Secciones</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-school-100">
              {categories.map(cat => (
                <li key={cat}>
                  <Link to={`/category/${cat}`} className="hover:text-white hover:underline decoration-school-500 underline-offset-4">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
             <div className="space-y-3 text-sm text-school-100">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>periodico@escuela.edu.ar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={16} />
                  <span>@vocesenlinea_escolar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Facebook size={16} />
                  <span>/VocesEnLinea</span>
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <Info size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-xs italic">
                    Este periódico es un proyecto educativo. Las opiniones expresadas son responsabilidad de sus autores y buscan fomentar el pensamiento crítico.
                  </span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-school-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-school-100 opacity-60">
          <p>&copy; 2025 Escuela Nº 734 Cóndor Andino. Estudiante: Caren Sabrina Almada.</p>
          <Link to="/admin" className="flex items-center gap-1 hover:text-white mt-2 md:mt-0 transition-colors">
            <Lock size={10} />
            <span>Acceso Docente</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};
