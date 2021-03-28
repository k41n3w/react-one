import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('').then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects}
      </ul>
    </>
  );
}

export default App;
