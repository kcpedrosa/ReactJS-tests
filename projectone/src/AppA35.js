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
        let state = this.state
        state.nome = 'Manson'
        state.contador += 1
        this.setState(state)
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