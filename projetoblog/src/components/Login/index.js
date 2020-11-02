import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './login.css'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.entrar = this.entrar.bind(this)
        this.login = this.login.bind(this)
    }

    componentDidMount(){
        //verifies if theres already a logged user
        if(firebase.getCurrent()){
            this.props.history.replace('/dashboard')
        }
    }

    entrar(e){
        e.preventDefault()
        this.login()
    }

    login = async() =>{
        const {email, password} = this.state

        try{
            await firebase.login(email, password)
            .catch((error)=>{
            if(error.code === 'auth/user-not-found'){
                alert("l'utilisateur n'existe pas")
            }else {
                alert('Erreur/code:' + error.code)
                return null
                //return null make the logic stops here
            }   
            })
            this.props.history.replace('dashboard')

        }catch(error){
            alert(error.message)
        }
    }

    render(){
        return(
            <div>
                <h1> Écran de connexion </h1>
                <form onSubmit={this.entrar} id='login'>

                    <label>Email:</label><br/>
                    <input type='email' autoComplete='off' autoFocus value={this.state.email}
                    placeholder='exemplo@exemplo.com'
                    onChange={(e)=>this.setState({email: e.target.value}) }/>
                    <br/>
                    <input type='password' autoComplete='off' value={this.state.password}
                    placeholder='Digite sua senha...'
                    onChange={(e)=>this.setState({password: e.target.value}) }/>
                    <br/>
                    <button type='submit'>Entrar</button>

                    <Link to='/register'>Vous n'avez pas de compte? Créez-en un maintenant </Link>

                </form>
                
            </div>
        )
    }
}


export default withRouter(Login)