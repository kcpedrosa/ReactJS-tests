import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/SPAaula56/Home'
import Header from './components/SPAaula56/Header'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
            
                <Route exact path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Routes