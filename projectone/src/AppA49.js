import React, { Component} from 'react'
import Header from './components/meusite/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Routes from './routes49';

class App extends Component {
    render(){
        return(
            <div>
                
                <Routes/>
            </div>
        )
    }
}

export default App;