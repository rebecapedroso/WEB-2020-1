import React, {Component} from 'react'

export default class Filho extends Component{
    render(){
        return(
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h2>Curso: {this.props.curso}</h2>
                <h2>Cidade: {this.props.cidade}</h2>
            </div>
        )
    }
} 