import React from 'react';
import './App.css';

import MeusDados from './components/questao01/MeusDados'
import MinhaClasse from './components/questao02/MinhaClasse'
import DadosProps from './components/questao03/DadosProps'
//import Pai from './components/questao03/Pai'

function App() {
  return (
    <div className="App">
      <MeusDados/>
      <MinhaClasse/>
      <DadosProps
        nome = 'Rebeca Silva'
        curso = 'SI'
        cidade = 'Milhã-CE'
      />
      
    </div>
  );
}

export default App;
