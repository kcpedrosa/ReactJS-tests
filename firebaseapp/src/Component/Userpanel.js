import React, {Component} from 'react'

//relates do App68.js


 
 
class Userpanel extends Component {
    render(){
        return(
        <div className="userpanel">
            <h1>Bem vindo!</h1>
            <p>User Panel/Admin </p>
            <p>{this.props.verEmail}</p>
            <p>{this.props.verUid}</p>
            <button onClick={this.props.acaoSair}>Sair</button>
         
        </div>
        )
    }
}
 
export default Userpanel