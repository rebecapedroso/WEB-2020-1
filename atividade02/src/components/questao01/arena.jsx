import React from 'react'

const Hero = (props)=>
<div>
    <h5>Herói: {props.nome}</h5>
    <img src = "https://upload.wikimedia.org/wikipedia/pt/f/f2/Arya_stark_s7.jpg" width = '100px' />
</div>

const Enemy = (props)=>
<div>
    <h5>Inimigo: {props.nome}</h5>
    <img src = "https://upload.wikimedia.org/wikipedia/pt/c/c6/The_Night_King_at_Hardhome.jpg" width = '100px'/>
</div>

const Arena =(props)=>
<div class="jumbotron">
    <Hero nome ="Arya Stark"/>
    <Enemy nome = "Rei da Noite"/>
</div>

export default Arena;