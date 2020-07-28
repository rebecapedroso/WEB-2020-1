import React, { Component } from 'react'

export default class MinhaClasse extends Component {

    constructor() {
        super()
        this.nome = 'Rebeca Silva'
        this.curso = 'SI'
        this.cidade = 'Milha-CE'
    }
    render(){    
    return (
            <div>
                <h2>Nome: {this.nome}</h2>
                <h2>Curso: {this.curso}</h2>
                <h2>Cidade: {this.cidade}</h2>
            </div>
    )
    }
}