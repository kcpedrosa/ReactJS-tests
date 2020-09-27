import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div>
                Header = = = 
                <Link to="/"> Aller à Home ...</Link>
                <hr/>
            </div>
        )
    }
}

export default Header