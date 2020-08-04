import React from 'react';
import './App.css';
import Arena from './components/questao01/arena'
import Arena2 from './components/questao02/arena2'
import World from './components/questao03/world'
import Arena3 from './components/questao03/arena3'
//import arena4 from './components/questao04/arenaFilho'
import {Hero, Enemy} from './components/questao04/arena4'

//import { ARYA_IMG, REI_IMG } from '../src/constants'

function App() {
  return (
    <div className="App">
      <h2>Questão01 e Questão05</h2>
      <Arena />
      <h2>Questão02</h2>
      <Arena2 />
      <h2>Questão03</h2>
      <World>
        <Arena3 />
        <Arena3 />
        <Arena3 />
      </World>
      <h2>Questão04</h2>
      <arena4 >
        <Hero nome = 'Arya Stark' arena = 'Winterfell'/>
        <Enemy nome = 'Rei da noite' arena = 'Winterfell'/>
      </arena4>

    </div>
  );
}

export default App;
