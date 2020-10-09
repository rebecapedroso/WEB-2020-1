import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'

export default class Navigate extends Component {

    constructor(props){
        super(props)
        this.state = {id: this.props.id}
    }

    proximo(){
        const id = (this.state.id + 1 > 500) ? this.state.id : this.state.id + 1
        this.setState({id})
        this.props.setId(id)
    }

    anterior(){
        const id = (this.state.id - 1 < 1) ? this.state.id : this.state.id - 1
        this.setState({id})
        this.props.setId(id)
    }

    somarDez(){
        const id = (this.state.id + 10 > 500) ? 500 : this.state.id + 10
        this.setState({id})
        this.props.setId(id)
    }

    subtrairDez(){
        const id = (this.state.id - 10 < 1) ? 1 : this.state.id - 10
        this.setState({id})
        this.props.setId(id)
    }

    render() {
        return (
            <Card titulo='Id do Pokémon' red>
                <div className = 'navigate'>
                    <button className = 'btn btn-secondary' onClick={()=>this.subtrairDez()}>
                        -10
                    </button>
                    <button className = 'btn btn-secondary' onClick={()=>this.anterior()}>
                        Anterior
                    </button>
                    <button className = 'btn btn-secondary' onClick={()=>this.proximo()}>
                        Próximo
                    </button>
                    <button className = 'btn btn-secondary' onClick={()=>this.somarDez()}>
                        +10
                    </button>
                    <input value ={this.state.id}readOnly/>

                </div>
            </Card>
        )
    }
}