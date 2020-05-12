import React, {Component} from 'react';

class Equipe extends Component {
    render(){
    return(
        <div>
            <Sobre username={this.props.nome} role={this.props.cargo}/>
            <Social fb={this.props.facebook}/>
            <hr></hr>
        </div>
    )
    }
}

class Sobre extends Component {
    render(){
        return(
            <div>
                <h2>Nome = {this.props.username}</h2>
                <h3> Cargo = {this.props.role}</h3>
            </div>
        )
    }
}

const Social=(props)=>{
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a>LinkedIn</a>
        </div>
    )
}



function App() {
    return (
        <div>
            <h2>Conheça nossa equipe</h2>
            <Equipe nome='Frodo' cargo='Turista' facebook='https://google.com'/>
            <Equipe nome='Treebeard' cargo='Shepherd' facebook='https://lotr.fandom.com/wiki/Treebeard'/>
        </div>
    )
}

export default App;