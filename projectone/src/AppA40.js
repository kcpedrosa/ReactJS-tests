import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: false
        }
        this.access = this.entrar.bind(this)
        this.logout = this.sair.bind(this)
    }

    sair(){
        this.setState({status: false})
    }

    
    entrar(){
        this.setState({status: true})
    }
    

    render(){
        return(
            <div>
                    {this.state.status == true
                     ?
                    <div>
                        <h2>Bem vindo ao sistema</h2>
                        <button onClick={this.logout}>Sair</button>
                    </div>
                     :
                    <div>
                        <h2>Olá visitante, faça login</h2>
                        <button onClick={this.access}>Entrar no sistema</button>
                    </div>
                        }
            </div>
        )
    }
}


export default App;