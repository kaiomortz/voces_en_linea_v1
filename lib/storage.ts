import { Article } from '../types';
import { articles as staticArticles } from '../data';

const STORAGE_KEY = 'voces_nuevos_articulos';

// Obtener todos los artículos (Estáticos + Locales) para la web pública
export const getArticles = (): Article[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const localArticles: Article[] = stored ? JSON.parse(stored) : [];
    // Ponemos los locales primero para que aparezcan como más recientes
    return [...localArticles, ...staticArticles];
  } catch (error) {
    console.error("Error leyendo artículos locales", error);
    return staticArticles;
  }
};

// Obtener solo artículos locales (para el admin panel)
export const getLocalArticles = (): Article[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
};

// Guardar un nuevo artículo
export const saveArticle = (article: Article): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const localArticles: Article[] = stored ? JSON.parse(stored) : [];
    const updatedArticles = [article, ...localArticles];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArticles));
  } catch (error) {
    console.error("Error guardando artículo", error);
    alert("No se pudo guardar el artículo debido a un error de almacenamiento.");
  }
};

// Eliminar un artículo local
export const deleteArticle = (id: string): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const localArticles: Article[] = JSON.parse(stored);
      const updatedArticles = localArticles.filter(a => a.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArticles));
    }
  } catch (error) {
    console.error("Error eliminando artículo", error);
  }
};

// Autenticación simple (Simulada)
export const checkAuth = (): boolean => {
  return sessionStorage.getItem('isAdmin') === 'true';
};

export const login = (password: string): boolean => {
  // Contraseña harcodeada para la demo
  if (password === 'escuela734') {
    sessionStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};

export const logout = (): void => {
  sessionStorage.removeItem('isAdmin');
};