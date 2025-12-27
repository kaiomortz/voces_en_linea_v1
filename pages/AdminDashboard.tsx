import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { checkAuth, saveArticle, logout, getLocalArticles, deleteArticle } from '../lib/storage';
import { Category, Article } from '../types';
import { Save, LogOut, PlusCircle, Trash2, Star, Eye } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [localArticles, setLocalArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    if (!checkAuth()) {
      navigate('/admin');
    }
    loadArticles();
  }, [navigate]);

  const loadArticles = () => {
    setLocalArticles(getLocalArticles());
  };

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Noticias' as Category,
    imageUrl: '',
    featured: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newArticle: Article = {
      id: Date.now().toString(), // Generar ID único basado en timestamp
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      author: formData.author,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: formData.category,
      imageUrl: formData.imageUrl || 'https://picsum.photos/800/600', // Imagen por defecto si no hay
      featured: formData.featured
    };

    saveArticle(newArticle);
    
    // Resetear formulario y recargar lista
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'Noticias' as Category,
      imageUrl: '',
      featured: false
    });
    loadArticles();
    alert('Artículo publicado con éxito.');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      deleteArticle(id);
      loadArticles();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
        <div>
           <h1 className="text-3xl font-serif font-bold text-gray-900">Panel de Edición</h1>
           <p className="text-sm text-gray-500 mt-1">Escuela Nº 734 Cóndor Andino</p>
        </div>
        
        <div className="flex gap-4">
          <Link to="/" className="flex items-center gap-2 text-school-700 hover:text-school-900 font-medium text-sm border border-school-200 px-3 py-2 rounded-md">
            <Eye size={16} />
            Ver Web
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-red-50"
          >
            <LogOut size={16} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario de Creación */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-school-700 text-white p-4 flex items-center gap-2">
              <PlusCircle size={20} />
              <h2 className="font-bold">Nueva Publicación</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Título de la Nota</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Autor</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Estudiante o Docente"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500"
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Sección</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value as Category})}
                  >
                    <option value="Noticias">Noticias</option>
                    <option value="Entrevistas">Entrevistas</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Opinión">Opinión</option>
                    <option value="Convivencia">Convivencia</option>
                    <option value="ESI">ESI</option>
                    <option value="Ambiente">Ambiente</option>
                    <option value="Deportes">Deportes</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bajada / Resumen</label>
                  <textarea 
                    required 
                    rows={2}
                    placeholder="Texto breve que aparece en la portada..."
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500"
                    value={formData.excerpt}
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL de Imagen</label>
                  <input 
                    type="url" 
                    placeholder="https://ejemplo.com/imagen.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500"
                    value={formData.imageUrl}
                    onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  />
                  <p className="text-xs text-gray-500 mt-1">Opcional. Se asignará una automática si se deja vacío.</p>
                </div>

                <div className="md:col-span-2 flex items-center gap-2 bg-yellow-50 p-3 rounded border border-yellow-200">
                  <input 
                    type="checkbox" 
                    id="featured"
                    className="w-5 h-5 text-school-600 rounded focus:ring-school-500"
                    checked={formData.featured}
                    onChange={e => setFormData({...formData, featured: e.target.checked})}
                  />
                  <label htmlFor="featured" className="text-sm font-bold text-gray-800 flex items-center gap-1 cursor-pointer">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    Marcar como Destacado (Aparecerá en la cabecera principal)
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Contenido del Artículo</label>
                  <textarea 
                    required 
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-school-500 focus:border-school-500 font-sans"
                    placeholder="Escribe aquí el cuerpo de la noticia..."
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button 
                  type="submit" 
                  className="bg-school-700 text-white font-bold py-3 px-8 rounded hover:bg-school-900 transition-colors shadow-md flex items-center gap-2"
                >
                  <Save size={20} />
                  Publicar Artículo
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Lista Lateral de Artículos */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-24">
             <div className="bg-gray-100 p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700">Mis Publicaciones</h3>
             </div>
             <div className="max-h-[600px] overflow-y-auto">
                {localArticles.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-sm">
                    No has creado artículos nuevos aún. Los artículos originales del sitio no se pueden editar aquí.
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-100">
                    {localArticles.map(article => (
                      <li key={article.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{article.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-school-600 bg-school-50 px-2 py-0.5 rounded-full">{article.category}</span>
                              {article.featured && <Star size={12} className="text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                          </div>
                          <button 
                            onClick={() => handleDelete(article.id)}
                            className="text-gray-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                            title="Eliminar artículo"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};