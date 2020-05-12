import React, {Component} from 'react';
import './style.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numero:0,
      botao: 'INICIAR'
    }
    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  iniciar(){
    // prof criou let state = this.state, ver em zerar
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer=null
      this.state.botao = 'INICIAR'
    }else{
      this.timer = setInterval(()=> {
        let state = this.state
        state.numero += 0.01
        this.setState(state)
      }, 10)
      this.state.botao = 'PAUSAR'
    }
    this.setState(this.state)
  }

  zerar(){
      if(this.timer !== null){
        clearInterval(this.timer)
        this.timer=null
      }
      let state = this.state
      state.numero = 0.0
      state.botao = 'INICIAR'
      this.setState(state)
  }

  render(){
    return(
      <div className='flex-container'>
        <img src={require('./assets/cronometro.png')} className='img'/>
        <a className='timer'> {this.state.numero.toFixed(2)} </a>
        <div className='areaBtn'>
        <a className='botao' onClick={this.iniciar}>{this.state.botao}</a>
          <a className='botao' onClick={this.zerar}>ZERAR</a>
        </div>
      </div>
    )
  }
}

export default App;
