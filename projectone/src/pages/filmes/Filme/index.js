import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './filmeinfo.css'

class Filme extends Component{
    constructor(props){
        super(props)
        this.state={
            filme:[]
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}` 
        fetch(url)
        .then((r)=>r.json())
        .then((json) => {
            this.setState({filme: json})
            console.log(json)//debug
         })
    }

    render(){
        return(
            <div className="filme-info">
                <h3>{this.state.filme.nome} </h3>
                <img src={this.state.filme.foto} alt='capa'/>

                {this.state.filme.length !== 0 && 
                 <h4>Sinopse</h4> }
               
                <p>{this.state.filme.sinopse}</p>
                <Link to='/'>Voltar para Home</Link>
            </div>
        )
    }

}

export default Filme