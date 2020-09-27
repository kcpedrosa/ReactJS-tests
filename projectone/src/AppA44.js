import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            objeto:{
            nome:'',
            email: '',
            senha: '',
            sexo: ''
            }
        }
        this.dadosForm=this.dadosForm.bind(this)
        
    }
    dadosForm(event){
        let abkurzung = this.state.objeto
        abkurzung[event.target.name] = event.target.value
        this.setState({objeto: abkurzung})
    }

    

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome:
                    <input type='text' name='nome' value={this.state.objeto.nome} 
                onChange={this.dadosForm}></input>
                <br></br>
                Email:
                    <input type="email" name="email" value={this.state.objeto.email}
                onChange={this.dadosForm}></input>
                <br></br>
                Senha:
                    <input type="password" name="senha" value={this.state.objeto.senha}
                onChange={this.dadosForm}></input>
                <br></br>
                Sexo:
                    <select name='sexo' value={this.state.objeto.sexo} onChange={this.dadosForm}>
                    <option value="">-- Selecione --</option>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                </select>
                <div>
                <h3>{this.state.objeto.nome}</h3>
                <h3>{this.state.objeto.email}</h3>
                <h3>{this.state.objeto.senha}</h3>
                <h2>{this.state.objeto.sexo}</h2>
            </div>
            </div>
            
        )
    }

}


export default App;