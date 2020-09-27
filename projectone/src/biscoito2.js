import React, { Component } from "react";
import bisc from './assets/biscoito.png'
import './assets/styles.css'
import Botao from './components/botaoBiscoito/botao'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoSorte: ''

        }
        this.frases=['Siga os bons e aprenda com eles.',
         'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
        ]
        this.crackCookie = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
        let sorte = this.state
        sorte.textoSorte =' " '+ this.frases[Math.floor(Math.random() * this.frases.length)] + ' " '
        this.setState(sorte)

    }

    render(){
        return(
            <div className="container">
                <h3>Biscoito da Sorte</h3>
                <img src={bisc} className='biscoito'></img>
                <Botao descricao='Abrir biscoito da sorte...' acaoBtn={this.crackCookie}/>
                <p>Frase do dia:</p>
                <h4>{this.state.textoSorte}</h4>
            </div>
        )
    }
}

export default App;