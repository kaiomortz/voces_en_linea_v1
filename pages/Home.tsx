import React, { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ArticleCard } from '../components/ArticleCard';
import { getArticles } from '../lib/storage'; 
import { Article } from '../types';

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  if (articles.length === 0) return null;

  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const recentArticles = articles; 

  return (
    <div>
      <HeroSection article={featuredArticle} />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Últimas Publicaciones</h2>
          <span className="text-sm text-school-600 font-medium">Edición Actual</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-school-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-school-900 italic mb-6">
            "La escuela debe ser el lugar donde aprendemos a escuchar, a respetar las diferencias y a construir juntos, también en el mundo digital."
          </blockquote>
          <p className="font-sans font-bold text-school-700">— Fundamentación del Proyecto "Voces en Línea"</p>
        </div>
      </section>
    </div>
  );
};