import React, {Component} from 'react';

import firebase from './firebaseConnection'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      nome:'',
      idade:'',
      email:'',
      senha:''
    }
    this.registrar = this.registrar.bind(this)

    firebase.auth().signOut()
    

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
           firebase.database().ref('usuarios').child(user.uid).set({
               nome:this.state.nome,
               idade:this.state.idade
           })
           .then(()=>{
               this.setState({
                   nome:'', idade:'', 
                   email:'', senha:''})
           })
        }
    })
  }


  registrar(e){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
            alert('Error code: ' + error.code )
    })

    e.preventDefault()
  }

  

  render(){
    
    return(
      <div>
          <h2>Novo Usuário:</h2>
          <form onSubmit={(e)=>this.registrar(e)}>
            <label>Nome:</label><br/>
            <input type='text' value={this.state.nome} 
            onChange={(e) => this.setState({nome: e.target.value})}/><br/>

            <label>Idade:</label><br/>
            <input type='text' value={this.state.idade} 
            onChange={(e) => this.setState({idade: e.target.value})}/><br/>

            <label>Usuário:</label><br/>
            <input type='text' value={this.state.email} 
            onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha:</label><br/>
            <input type='text' value={this.state.senha} 
             onChange={(e) => this.setState({senha: e.target.value})}/><br/>

            <button type='submit'>Entrar</button>
          </form>
          <br/>
         
         
      </div>
    )
  }

}
