import React, {Component} from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component{

    constructor(props){
        super(props)

        this.state = {disciplinas: []}
    }

    componentDidMount(){
        axios.get('http://localhost:3002/disciplinas')
        .then(
            (res)=>{
                this.setState({disciplinas: res.data})
                console.log(this.state.disciplinas)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (dis, i)=>{
                return <TableRow disciplina ={dis} key ={i}/>
            }
        )
    }

    render(){
        return(
            <div>
                <h3>Listar Disciplinas</h3>
                <table className='table table-striped' style ={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>
            </div>
        )
    }
}