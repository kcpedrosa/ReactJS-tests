import React, {Component} from 'react'

//relates do App68.js


 
 
class Initial extends Component {
    render(){
        return(
        <div className="initial">
            <h2>Bienvenu(e):</h2>
            

            <label>Usuário:</label><br/>
            <input type='text' value={this.props.user} 
            onChange={this.props.quandoMudaEmail}/><br/>

            <label>Senha:</label><br/>
            <input type='text' value={this.props.password} 
             onChange={this.props.quandoMudaSenha}/><br/>

            <button onClick={this.props.acaoCadastrar}>Cadastrar</button>                 
            <button onClick={this.props.acaoLogar}>Logar</button>  
         
          <br/>
         
        </div>
        )
    }
}
 
export default Initial