import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './pages/site/about';
import Login from './pages/system/login';
import RegisterType from './pages/system/registers';
import RegisterAngeluz from './pages/system/registers/registerAngeluz';
import Registeruser from './pages/system/registers/registerUser';
import Dashboard from './pages/system/dashboard';
import NewCases from './pages/system/newCases';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/sobre" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/tipo-de-cadastro" component={RegisterType} />
                <Route path="/cadastro-de-angeluz" component={RegisterAngeluz} />
                <Route path="/cadastro-de-usuario" component={Registeruser} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/novos-casos" component={NewCases} />
            </Switch>
        </BrowserRouter>
    )
}