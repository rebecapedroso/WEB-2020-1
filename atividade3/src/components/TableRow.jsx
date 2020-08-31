import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(){
        axios.delete('http://localhost:3003/disciplinas/delete/'+this.props.disciplina._id)
        .then(res=>this.props.apagarElementoPorId(this.props.disciplina._id))
        .catch(error=>console.log(error))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.disciplina._id} className="btn btn-light"><img src = "data:image/png;base64,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" width = '20px' height= '25' /></Link>
                </td>

                <td>
                <button onClick={this.apagar} className="btn btn-light"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/User-trash.svg/1200px-User-trash.svg.png"  width = '20px' height= '25'   /></button>
                </td>


            </tr>
        )
    }
}

