import React from 'react'
import {ARYA_IMG, REI_IMG} from '../../constants'

const Hero = (props)=>
<div>
<h5>Herói: {props.nome}</h5>
    <img src = {props.img} width= '100px'/>
</div>

const Enemy = (props)=>
<div>
    <h5>Inimigo: {props.nome}</h5>
    <img src = {props.img} width = '100px'/>
</div>

const Arena3 = (props)=>
<div>
    <Hero nome = 'Arya Stark' img = {ARYA_IMG}/>
    <Enemy nome = 'Rei da Noite' img = {REI_IMG}/>
</div>

export default Arena3;



/*const Arena3 = (props)=>
<div>
    <h2>Herói: {props.nome} {props.img} {props.nomeI} {props.imgI} </h2>
</div>

export default Arena3;*/
