import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Erro extends Component{
    render(){
        return(
            <div>
                <h3>Página não encontrada</h3>
                <Link to='/'>Voltar para Home</Link>
            </div>
        )
    }

}

export default Erro