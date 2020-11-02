import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './register.css'



class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            nome:'',
            email:'',
            password:''
        }
        this.register = this.register.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    register(e){
        e.preventDefault()
        this.onRegister()
    }
    
    onRegister = async() => {
        try{
            const{nome, email, password} = this.state
            await firebase.register(nome, email, password)
            this.props.history.replace('/dashboard')

        }catch(error){
            alert(error.message)
        }
    }
    

    render(){
        return(
            <div>
                <h1 className='register-h1'> New User: </h1>
                <form onSubmit={this.register} id='register'>
                    <br/>
                    <label> Enter your name: </label><br/>
                    <input type='text' autoComplete='off' autoFocus value={this.state.nome}
                    onChange={(e)=>this.setState({nome: e.target.value})}
                    placeholder='Your name...'  />
                    <br/>
                    <label> Enter your email: </label><br/>
                    <input type='text' autoComplete='off' value={this.state.email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                    placeholder='example@example.com...'/>
                    <br/>
                    <label> Enter your password: </label><br/>
                    <input type='password'  autoComplete='off' value={this.state.password}
                    onChange={(e)=>this.setState({password: e.target.value})}
                    placeholder='Your password ...'/>
                    <br/>

                    <button type='submit'> Register </button>
                </form>    
            </div>
        )
    }
}


export default withRouter(Register)