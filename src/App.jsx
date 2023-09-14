import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomeComponents/Home';
import Contato from './ContatoComponents/Contato';
import Header from './PublicComponents/Header';
import Head from './PublicComponents/Head';
import Produto from './ProdutoComponents/Produto';
import NotFound from './PublicComponents/NotFound';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
