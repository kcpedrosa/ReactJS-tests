import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/filmes/Home'
import Header from './components/filmes/Header'
import Erro from './pages/filmes/Erro'
import Filme from './pages/filmes/Filme'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}  /> 
                <Route exact path='/filme/:id' component={Filme}/>
                <Route path='*' component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes