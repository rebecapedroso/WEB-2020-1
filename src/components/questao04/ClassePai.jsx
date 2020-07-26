import React, {Component} from 'react'

import ClasseFilho from './ClasseFilho'

export default class Pai extends Component{
    render(){
        return(
            <ClasseFilho nome = 'Rebeca' curso = 'SI' cidade = 'Milhã-CE' />
        )
    }
}