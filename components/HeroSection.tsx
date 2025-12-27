import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface Props {
  article: Article;
}

export const HeroSection: React.FC<Props> = ({ article }) => {
  return (
    <div className="relative bg-school-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-school-900/90 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-school-500 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4">
            Destacado del Mes
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 font-light leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-8">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
          </div>

          <Link 
            to={`/article/${article.id}`} 
            className="inline-flex items-center gap-2 bg-white text-school-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Leer Artículo Completo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};