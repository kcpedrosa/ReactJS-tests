import React, {Component} from 'react';
import firebase from 'firebase'

//import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      tokenInput:'',
      nomeInput:'',
      idadeInput:'',
      token:'Carregando...',
      idade:'',
      nome:'',
      cargo:''
    }
    this.cadastrar = this.cadastrar.bind(this)

    let firebaseConfig = {
      apiKey: "AIzaSyDIoP05K91Kz6UQd9ExD0mTfUsjpV09sTs",
      authDomain: "reactapp-89dcc.firebaseapp.com",
      databaseURL: "https://reactapp-89dcc.firebaseio.com",
      projectId: "reactapp-89dcc",
      storageBucket: "reactapp-89dcc.appspot.com",
      messagingSenderId: "574994651213",
      appId: "1:574994651213:web:6c2b2db6ca19d81faa2404",
      measurementId: "G-N01YJ8584D"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)}

    /* bellow generates real time constant update*/
    
    firebase.database().ref('token').on('value', (snapshot)=>{
      let state = this.state
      state.token = snapshot.val()
      this.setState(state)
    })
    
    /* bellow generates unique update when app is opened*/
    
    firebase.database().ref('token').once('value').then((snapshot)=>{
      let state = this.state
      state.token = snapshot.val()
      this.setState(state)
    })

    firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
      let state = this.state
      state.nome = snapshot.val().nome
      state.idade = snapshot.val().idade
      state.cargo = snapshot.val().cargo
      this.setState(state)
    })
  }

  cadastrar(e){
//inserting new data
//UPDATing token value[if it does not exist, will CREATE]
    //this update is aimed at token
    firebase.database().ref('token').set(this.state.tokenInput)

    //this update is aimed at child 1[john5]
    firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.cargo)


    //will delete cargo in child 1 when you click submit
    //firebase.database.ref('usuarios').child(1).child('cargo').remove()
    //will remove the token data[in the SUBMIT]
    //firebase.database.ref('token').remove()

    //Add to database
    let usuarios=firebase.database().ref('usuarios')
    let chave=usuarios.push().key
    usuarios.child(chave).set({
      nome:this.state.nomeInput,
      idade:this.state.idadeInput
    })


    e.preventDefault()
  }

  render(){
    const{token, nome, idade, cargo} = this.state //idade receives from this.state the values stored there
    return(
      <div>
        <form onSubmit={this.cadastrar}>
          <p>Token</p>
          <input type='text' value={this.state.tokenInput}
          onChange={(e)=>this.setState({tokenInput: e.target.value})}
          />
          <br/>
          <p>Cargo</p>
          <input type='text' value={this.state.cargo}
          onChange={(e)=>this.setState({cargo: e.target.value})}
          /><br/>
          <br/>
          <p>Nome</p>
          <input type='text' value={this.state.nomeInput}
          onChange={(e)=>this.setState({nomeInput: e.target.value})}
          />
          <br/>

          <p>Idade</p>
          <input type='text' value={this.state.idadeInput}
          onChange={(e)=>this.setState({idadeInput: e.target.value})}
          />
          <br/>
          

          <button type='submit'> SUBMIT </button>
          <p>OBS:you may leave blank fields, watch the result</p>

        </form>

        <h1> Working fine... </h1>
        <h1>Token = {this.state.token}</h1>
        <h1>Idade = {idade}</h1>
        <h1>Nome = {nome}</h1>
        <h1>Cargo = {cargo}</h1>
      </div>
    )
  }

}


