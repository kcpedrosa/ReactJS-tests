import { render } from '@testing-library/react'
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from './../../firebase'
import './dashboard.css'


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            nome:localStorage.nome
        }
        this.logout=this.logout.bind(this)
    }

    async componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('/login')
            return null
        }
        firebase.getUserName((info)=>{
            localStorage.nome = info.val().nome
            this.setState({nome:localStorage.nome}) 
        })
    }

    logout = async()=>{
        firebase.logout()
        .catch((error)=>{
            console.log(error)
        })
        localStorage.removeItem('nome')
        this.props.history.push('/')
    }

    render(){
        return(
            <div id='dashboard'>
                <div className='user-info'>
                    <h1>Hi and welcome,  {this.state.nome}</h1>
                    <Link to='/dashboard/new'>New post </Link>
                </div>
                <br/>
                <p>Logged as: {firebase.getCurrent()}</p>
                <br/>
                <button onClick={()=>{this.logout()}}> Log off </button>
            </div>
        )
    }
}

export default withRouter(Dashboard)