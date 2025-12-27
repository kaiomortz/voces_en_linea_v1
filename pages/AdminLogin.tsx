import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../lib/storage';
import { Lock, ArrowRight } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Contraseña incorrecta. Intente con "escuela734"');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="bg-school-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Lock className="text-school-700" size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900">Acceso Docente</h2>
          <p className="text-gray-500 mt-2">Ingrese la contraseña para gestionar contenidos.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-school-500 focus:border-school-500"
              placeholder="••••••••"
              required
            />
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-school-700 text-white font-bold py-3 px-4 rounded hover:bg-school-800 transition-colors"
          >
            Ingresar
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
