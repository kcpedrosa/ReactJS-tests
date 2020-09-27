import React from 'react'
import {HashLink} from 'react-router-hash-link'
//deveria ser classname contato...
function Sobre(){
        return(
            <div className="home" id='sobre'>
                <hr/>
                <h1>CONTATO Contact 98787 7878</h1>
                <h2>et une cité commerçante et bancaire  </h2>
                <h3>d’importance du Saint-Empire romain germanique. </h3>
                <nav>        
                <ul>
                    <li><HashLink smooth to='#home'>Home</HashLink></li>
                    <li><HashLink smooth to='#sobre'>Sobre</HashLink></li>
                    <li><HashLink smooth to='#contato'>Contato</HashLink></li>
                </ul>
                </nav>
                <HashLink smooth to='#home' style={{color:'#FFF'}}>Home</HashLink>
            </div>    
           
        )
    }

export default Sobre