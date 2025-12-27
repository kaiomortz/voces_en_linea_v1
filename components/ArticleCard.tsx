import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar } from 'lucide-react';

interface Props {
  article: Article;
}

export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article className="flex flex-col h-full group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-school-700 text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
          {article.category}
        </span>
      </div>
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center text-xs text-gray-500 mb-3 gap-2">
           <Calendar size={14} />
           <span>{article.date}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-school-700 transition-colors">
          <Link to={`/article/${article.id}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {article.excerpt}
        </p>
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Por {article.author}
          </span>
        </div>
      </div>
    </article>
  );
};