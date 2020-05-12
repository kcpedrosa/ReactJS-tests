import React from 'react';
//Aula 33 component dentro de component

const Equipe = (props) => {
    return(
        <div>
            <Sobre username={props.nome} role={props.cargo} age={props.idade} />
            <br/>
            <Social fb={props.facebook}/>
            <hr></hr>
        </div>
    )
}

const Sobre = (props) =>{
    return(
        <div>
            <h1>Olá meu nome é {props.username}</h1>
            <h3>Cargo = {props.role}</h3>
            <a>Idade = {props.age}</a>


        </div>
    )
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook &nbsp;</a>
            <a>LinkedIn &nbsp;</a>
            <a>YouTube &nbsp;</a>
        </div>
    )
}

function App() {
    return (
        <div>
            Olá mundo
            <Equipe nome='Sauron' cargo='ruler' idade='700'
             facebook='https://google.com'/>
            <Equipe nome='Ixidor' cargo='designer' idade='67'/>
        </div>
    )
}

export default App;