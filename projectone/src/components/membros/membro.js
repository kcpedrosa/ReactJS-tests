import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: props.nome
        }
        this.entrar=this.entrar.bind(this)
    }
    entrar(){
        this.setState({username: 'Sauron'})
    }

    render(){
        return(
            <div>
                <h1>Bem vindo(a) {this.state.username}</h1>
                <button onClick={this.entrar}>Entrar no sistema</button>
                <button onClick={() => this.setState({username: ''}) }>Sair</button>
            </div>
        )
    }
}

export default Membro;