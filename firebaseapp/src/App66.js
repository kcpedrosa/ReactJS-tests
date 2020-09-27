import React, {Component} from 'react';

import firebase from './firebaseConnection'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      senha:''
    }
    this.logar = this.logar.bind(this)
    this.sair = this.sair.bind(this)

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            alert('User logged successfuly \n Email: '+ user.email)
        }
    })
  }


  logar(e){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
        if(error.code === 'auth/wrong-password'){
            alert('Wrong password ...')
        }else{
            alert('Error code: ' + error.code )
        }
    })

    e.preventDefault()
  }

  sair(){
    firebase.auth().signOut()
    alert('User logged off...')
  }

  render(){
    
    return(
      <div>
          <h2>Entrar:</h2>
          <form onSubmit={this.logar}>
            <label>Usuário:</label><br/>
            <input type='text' value={this.state.email} 
            onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha:</label><br/>
            <input type='text' value={this.state.senha} 
             onChange={(e) => this.setState({senha: e.target.value})}/><br/>

            <button type='submit'>Entrar</button>
          </form>
          <br/>
          <button onClick={this.sair}>Sair</button>
         
      </div>
    )
  }

}
