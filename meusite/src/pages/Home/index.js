import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
 
 
class Home extends Component {
    render(){
        return(
            <div>
                
                <h2>Bienvenue a tous...</h2>
                <Link to="/sobre"> Aller à Sobre ...</Link>
            </div>
        )
    }
}
 
export default Home