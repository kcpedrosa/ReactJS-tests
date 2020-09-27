import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './pages/authteste/Home'
import Painel from './pages/authteste/Painel'
import {autenticado} from './auth'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props=>(
        autenticado() == true
        ?
        (<Component {...props} />)
        :
        (<Redirect to={{pathname: '/', state: {from:props.location} }} />)
    )}
    />
)

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute  path="/painel" component={Painel} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes