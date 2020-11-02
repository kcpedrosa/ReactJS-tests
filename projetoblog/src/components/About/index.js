import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './about.css'


class About extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        
    }

   
    render(){
        return(
            <div className='main'>
                <h1> About Us: </h1>
                <p>I'm Kattine, student of Control and Automation Engineering at UPE and bellow you can find a link to my github:</p>
                <a href='https://github.com/kcpedrosa'>https://github.com/kcpedrosa</a>
                <p>You can also sand me an email to kattine.costa@gmail.com or follow me on instagram at @kattinepedrosa</p>
                <p id='quote'>
                Two roads diverged in a wood, and I—
                I took the one less traveled by,
                And that has made all the difference. (Robert Frost)
                </p>
                
            </div>
        )
    }
}


export default withRouter(About)