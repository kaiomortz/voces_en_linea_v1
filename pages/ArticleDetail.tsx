import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticles } from '../lib/storage';
import { Article } from '../types';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const allArticles = getArticles();
    const found = allArticles.find(a => a.id === id);
    setArticle(found);
  }, [id]);

  if (!article) {
    return <div className="p-10 text-center">Artículo no encontrado. <Link to="/" className="text-school-500 underline">Volver al inicio</Link></div>;
  }

  return (
    <article className="max-w-4xl mx-auto bg-white min-h-screen">
      <div className="relative h-[400px]">
         <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white w-full">
             <Link 
              to={`/category/${article.category}`}
              className="inline-block bg-school-500 hover:bg-school-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide mb-3 transition-colors"
            >
              {article.category}
            </Link>
             <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4 shadow-black drop-shadow-lg">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
               <div className="flex items-center gap-2">
                 <User size={18} />
                 <span>{article.author}</span>
               </div>
               <div className="flex items-center gap-2">
                 <Calendar size={18} />
                 <span>{article.date}</span>
               </div>
            </div>
          </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8">
           {/* Sidebar / Actions */}
           <aside className="w-full md:w-1/4 order-2 md:order-1">
              <div className="sticky top-24 space-y-6">
                <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-school-700 transition-colors">
                  <ArrowLeft size={20} />
                  <span className="font-medium">Volver</span>
                </Link>
                <div className="h-px bg-gray-200"></div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2">Compartir</h4>
                   <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-100 text-gray-600">
                     <Share2 size={18} />
                     <span>Copiar enlace</span>
                   </button>
                </div>
              </div>
           </aside>

           {/* Content */}
           <div className="w-full md:w-3/4 order-1 md:order-2">
              <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-8 border-l-4 border-school-300 pl-4">
                {article.excerpt}
              </p>
              
              <div className="prose prose-lg prose-slate max-w-none">
                 {article.content.split('\n').map((paragraph, index) => (
                   <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                     {paragraph}
                   </p>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </article>
  );
};
