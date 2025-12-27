import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ArticleDetail } from './pages/ArticleDetail';
import { CategoryPage } from './pages/CategoryPage';
import { Participate } from './pages/Participate';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="article/:id" element={<ArticleDetail />} />
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="participate" element={<Participate />} />
          {/* Rutas de Admin */}
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
