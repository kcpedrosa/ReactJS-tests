import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            nome: '',
            email: '',
            senha: '',
            error: ''
        }
        this.cadastrar = this.cadastrar.bind(this)

    }
    cadastrar(event){
        const {nome, email, senha} = this.state
        if(nome !== '' && email!=='' && senha!==''){
            alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`)

        }else{
            this.setState({error: 'ERROR: Existem campos vazios, preencha todos os campos!'})
        }
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Novo usuário</h1>
                 {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type='text' value={this.state.nome} 
                    onChange={(event) => this.setState({nome: event.target.value})}></input>
                    <br></br>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} 
                    onChange={(event) => this.setState({email: event.target.value})}></input>
                    <br></br>
                    <label>Senha:</label>
                    <input type='text' value={this.state.senha} 
                    onChange={(event) => this.setState({senha: event.target.value}) }></input>
                    <br></br>
                    <button type='submit'>Cadastrar</button>
                </form>

            </div>
        )
    }
}
    

export default App;