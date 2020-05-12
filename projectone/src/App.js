import React, {Component} from 'react';
import './style2.css'



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            nutri:[]
        }
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state
            state.nutri = json
            this.setState(state)
            console.log(json)
        })
    }

    render(){
        return(
            <div className='flex-container'>
                <header>
                    <strong>React Nutrition</strong>
                </header>
                {this.state.nutri.map((item)=>{
                    return(
                        <article className='post' key={item.id}>
                            <strong className='titulo'>{item.titulo}</strong>
                            <img className='capa' src={item.capa}/>
                            <p className='subtitulo'>{item.subtitulo}</p>
                            <a className='botao' href='#'>Leia Mais</a>
                        </article>
                    )
                })}
            </div>

        )
    }

}

export default App;