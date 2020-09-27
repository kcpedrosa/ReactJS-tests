import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
 
 
class Erro extends Component {
    render(){
        return(
            <div>
                
                <h2>Ops! Página não encontrada!</h2>
                <h4>Por acaso você procura por:</h4>
                <Link to="/sobre"> Aller à Sobre ...</Link>
                <br/>
                <Link to="/"> Aller à Home ...</Link>
            </div>
        )
    }
}
 
export default Erro