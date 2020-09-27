import React, {Component} from 'react';
import Initial from './Component/Initialscreen'
import Userpanel from './Component/Userpanel'

import firebase from './firebaseConnection'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      senha:'',
      user:null
    }
    this.registrar = this.registrar.bind(this)
    this.logar = this.logar.bind(this)
    this.auth = this.auth.bind(this)
    this.sair = this.sair.bind(this)
  }
  
  componentDidMount(){
      this.auth()
  }

  auth(){
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({user:user})
        }
    })
  }

  registrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
    alert('Error code: ' + error.code )
    })
  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
    alert('Error code: ' + error.code )
    })
  }

  sair(){
      firebase.auth().signOut()
      .then(()=>{
          this.setState({user:null, email:'',
           senha:''})
      })
  }

  

  render(){
    
    return(
      <div>
          {this.state.user ?
            <Userpanel verEmail={this.state.user.email} verUid={this.state.user.uid}
            acaoSair={this.sair}/>
          :
            <Initial user={this.state.email} password={this.state.senha}
            quandoMudaEmail={(e) => this.setState({email: e.target.value})}
            quandoMudaSenha={(e) => this.setState({senha: e.target.value})}
            acaoCadastrar={this.registrar} acaoLogar={this.logar}/>
            }
          
      </div>
    )
  }
}
