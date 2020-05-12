import React, {Component} from 'react';
import Membro from './components/membros/membro';
//se vc renom membro pra index.js a cham poderia ser ./components/membros
//o react procura por default um arqv cham index



class App extends Component {
    

    render(){
        return(
            <div>
                <h1>Meu projeto </h1>
                <Membro nome='Visitante'/>
            </div>
        )
    }
}


export default App;