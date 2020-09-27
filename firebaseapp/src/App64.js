import React, {Component} from 'react';

import firebase from './firebaseConnection'

//import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      lista:[]
    }
    this.cadastrar = this.cadastrar.bind(this)

    

    firebase.database().ref('usuarios').on('value', (snapshot)=>{
        let state = this.state
        state.lista = []


        snapshot.forEach((childItem)=>{
            state.lista.push({
                key:childItem.key,
                nome:childItem.val().nome,
                idade:childItem.val().idade,
                cargo:childItem.val().cargo
            })
        })
        this.setState(state)
    })
    
  }

  cadastrar(e){

    e.preventDefault()
  }

  render(){
    
    return(
      <div>
          {this.state.lista.map((item)=>{
              return(
                  <div>
                      <h3>ID: {item.key}</h3>
                      <h1>Nome: {item.nome}</h1>
                      <h2>Cargo: {item.cargo}</h2>
                      <h2>Idade: {item.idade} anos</h2>
                      <hr/>
                  </div>
              )
          })}
        
      </div>
    )
  }

}


