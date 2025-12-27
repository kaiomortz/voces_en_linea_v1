import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../lib/storage';
import { ArticleCard } from '../components/ArticleCard';
import { Article } from '../types';

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    const allArticles = getArticles();
    const filtered = allArticles.filter(
      article => article.category === categoryName
    );
    setFilteredArticles(filtered);
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 capitalize">
          {categoryName}
        </h1>
        <div className="w-24 h-1 bg-school-500 mx-auto mt-4"></div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">
            Aún no hay artículos publicados en esta sección.
          </p>
          <p className="mt-2 text-school-600">
            ¡Sé el primero en escribir algo para {categoryName}!
          </p>
        </div>
      )}
    </div>
  );
};
