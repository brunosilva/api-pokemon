import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Detalhes from './pages/detalhes';
import Home from './pages/lista';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/detalhes' component={Detalhes} />
            </Switch>
        </BrowserRouter>
    )
}