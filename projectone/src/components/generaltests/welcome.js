import React from 'react';
import Dados from './dados.js'
import Midia from './midia.js'

const Bemvindo = (props)=>{
    return(
        <div>
            <h3>Willkommen</h3>
            <Dados name = {props.nome} duty= {props.cargo}/>
            <Midia url={props.link}/>
            <hr/>
        </div>
        
    )
}

export default Bemvindo;