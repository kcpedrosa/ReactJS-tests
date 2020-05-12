import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            email: 'sauron@mordor.com',
            senha: '',
            sexo: 'masculino'

        }
        this.trocaEmail=this.trocaEmail.bind(this)
        this.trocaSexo=this.trocaSexo.bind(this)
    }
    trocaEmail(event){
        let valorDigitado = event.target.value
        this.setState({email : valorDigitado})

    }
    trocaSexo(event){
        this.setState({sexo: event.target.value})
        //ou poderia colocar numa variavel como acima
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email}
                onChange={this.trocaEmail}></input>
                <br></br>
                Senha:
                <input type="password" name="senha" value={this.state.senha}
                onChange={(event)=> this.setState({senha : event.target.value})}></input>
                <br></br>
                Sexo:
                <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                </select>
                <div>
                <h3>{this.state.email}</h3>
                <h3>{this.state.senha}</h3>
                <h2>{this.state.sexo}</h2>
            </div>
            </div>
            
        )
    }

}


export default App;