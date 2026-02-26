import { Article } from '../types';
import { articles as staticArticles } from '../data';

const STORAGE_KEY = 'voces_v2'; // Cambiado de 'voces_nuevos_articulos' para forzar reset

export const getArticles = (): Article[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const localArticles: Article[] = stored ? JSON.parse(stored) : [];
    
    // Al poner staticArticles PRIMERO, nos aseguramos de que tus 
    // cambios en data.ts se vean reflejados apenas guardes.
    return [...staticArticles, ...localArticles];
  } catch (error) {
    console.error("Error leyendo artículos locales", error);
    return staticArticles;
  }
};

export const getLocalArticles = (): Article[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
};

export const saveArticle = (article: Article): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const localArticles: Article[] = stored ? JSON.parse(stored) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([article, ...localArticles]));
  } catch (error) {
    console.error("Error guardando", error);
  }
};

export const deleteArticle = (id: string): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const localArticles: Article[] = JSON.parse(stored);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localArticles.filter(a => a.id !== id)));
    }
  } catch (error) {
    console.error("Error eliminando", error);
  }
};

export const checkAuth = (): boolean => sessionStorage.getItem('isAdmin') === 'true';
export const login = (pass: string) => {
  if (pass === 'escuela734') {
    sessionStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};
export const logout = () => sessionStorage.removeItem('isAdmin');