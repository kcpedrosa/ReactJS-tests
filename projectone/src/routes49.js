import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/meusite/Home'
import Sobre from './pages/meusite/Sobre'
import Header from './components/meusite/Header'

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}  /> 
                <Route  path="/sobre" component={Sobre}  />
                
            </Switch>
        </BrowserRouter>
    )
}


export default Routes