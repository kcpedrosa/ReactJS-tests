import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sobre extends Component {
    render(){
        return(
            <div>
                <h2>Decouvrez notre gamme de produits...</h2>
                <br/>
                <Link to="/"> Aller à Home ...</Link>
                
            </div>
        )
    }
}

export default Sobre