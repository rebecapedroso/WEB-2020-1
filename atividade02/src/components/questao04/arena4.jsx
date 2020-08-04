import React from 'react'
import {ARYA_IMG, REI_IMG} from '../../constants'

const Hero = (props)=>
<div>
    <h5>Herói: {props.nome} da Arena {props.arena}  </h5>
    <img src={ARYA_IMG} width="100px"/>
</div>

const Enemy = (props)=>
<div>
    <h5>Inimigo: {props.nome} da Arena {props.arena}  </h5>
    <img src = {REI_IMG} width = '100px'/>
</div>

export {Hero, Enemy}

