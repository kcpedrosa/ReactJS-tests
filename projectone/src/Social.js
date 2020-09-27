import React from 'react';
import Bemvindo from './components/generaltests/welcome.js'

function SocialMedia(){
    return(
        <div>
            SocialMedia
           <Bemvindo nome="Lewandowski" cargo="soccer player" link="https://pt.wikipedia.org/wiki/Progressive_web_app"/>
           <Bemvindo nome="Mario" cargo="plombier" link="https://pt.wikipedia.org/wiki/Progressive_web_app"/>
           <h3>Let's rock</h3>
        </div>
    )
}

export default SocialMedia;