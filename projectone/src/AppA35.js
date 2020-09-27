import React, {Component} from 'react';



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            nome: 'Sauron',
            contador:0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar(){
        //jeito do prof
        let estado = this.state
        estado.nome = 'Manson'
        estado.contador += 1
        this.setState(estado)
        //mudei aqui para estado ->let estado e nao state
    }

    diminuir(){
        //o jeito que eu fiz
        let name = this.state
        name.nome='John5'
        this.setState(name)
        let tuner = this.state
        if(tuner.contador === 0){
            window.alert('Não é possível usar numeros negativos')
            return
        }
        tuner.contador -= 1
        this.setState(tuner)
        
    }

    render(){
    return(
        <div>
            <h1>{this.state.nome}</h1>
            <h1>Contador</h1>
            <h3>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>
            </h3>

            <hr></hr>
        </div>
    )
    }
}


export default App;