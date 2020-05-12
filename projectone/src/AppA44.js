import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{
            nome:'',
            email: '',
            senha: '',
            sexo: ''
            }
        }
        this.dadosForm=this.dadosForm.bind(this)
        
    }
    dadosForm(event){
        this.state.form[event.target.name] = event.target.value
        this.setState({form: this.state.form})
    }

    

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome:
                <input type='text' name='nome' value={this.state.form.nome} 
                onChange={this.dadosForm}></input>
                <br></br>
                Email:
                <input type="email" name="email" value={this.state.form.email}
                onChange={this.dadosForm}></input>
                <br></br>
                Senha:
                <input type="password" name="senha" value={this.state.form.senha}
                onChange={this.dadosForm}></input>
                <br></br>
                Sexo:
                <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                </select>
                <div>
                <h3>{this.state.form.nome}</h3>
                <h3>{this.state.form.email}</h3>
                <h3>{this.state.form.senha}</h3>
                <h2>{this.state.form.sexo}</h2>
            </div>
            </div>
            
        )
    }

}


export default App;