import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            email: 'exemplosauron@mordor.com',
            senha: '',
            sexo: ''

        }
        this.changeMail=this.trocaEmail.bind(this)
        this.cHANGESEX=this.trocaSexo.bind(this)
    }
    trocaEmail(event){
        let valorDigitado = event.target.value
        //target aims in the input were typing
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
                <p>Email:</p>
                <input type="email" name="email" value={this.state.email}
                onChange={this.changeMail}></input>
                <br></br>
                <p>Senha:</p>
                <input type="password" name="senha" value={this.state.senha}
                onChange={(event)=> this.setState({senha : event.target.value})}></input>
                <br></br>
                <p>Sexo:</p>
                <select name='sexo' value={this.state.sexo} onChange={this.cHANGESEX}>
                    <option value="">-- Selecione --</option>
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