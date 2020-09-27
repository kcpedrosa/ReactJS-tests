import React, {Component} from 'react'
import './assets/stylescrono.css'
import crono from './assets/cronometro.png'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            botao : 'GO'
        }
        this.timer = null
        this.vai = this.go.bind(this)
        this.limpar = this.clean.bind(this)
    }
    go(){
        let state = this.state
        if(this.timer != null){
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'GO'
        } else {
           this.timer = setInterval(()=>{
            let state = this.state
            state.numero += 0.01
            this.setState(state)
           }, 10)
           state.botao = 'PAUSE'
        }
        this.setState(state)
    }
    clean(){
        if(this.timer != null){
            clearInterval(this.timer)
            this.timer = null
            this.state.botao = 'GO'
        }
        //note that bellow is my resolution
        //the clean btn of the prof cleans AND stop the counter
        let state = this.state
        state.numero = 0
        this.setState(state)
    }

    render(){
        return(
            <div className='container'>
                <img src={crono} className='imagem'></img>
                <a className='timer'>{this.state.numero.toFixed(2)}</a>
                <div className='areabotao'>
                    <a className='botao' onClick={this.vai}> {this.state.botao} </a>
                    <a className='botao' onClick={this.limpar}> CLEAN </a>
                </div>
            </div>
        )
    }
}

export default App;