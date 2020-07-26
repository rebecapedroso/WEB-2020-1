import React from 'react';
import './App.css';

import MeusDados from './components/questao01/MeusDados'
import MinhaClasse from './components/questao02/MinhaClasse'
import Pai from './components/questao03/Pai'
import ClassePai from './components/questao04/ClassePai'

function App() {
  return (
    <div className="App">
      <MeusDados/>
      <MinhaClasse/>
      <Pai/>
      <ClassePai/>
    </div>
  );
}

export default App;
