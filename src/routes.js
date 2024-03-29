import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './pages/site/about';
import Login from './pages/system/login';
import RegisterType from './pages/system/registers';
import RegisterAngeluz from './pages/system/registers/registerAngeluz';
import Registeruser from './pages/system/registers/registerUser';
import Profile from './pages/system/profile';
import Dashboard from './pages/system/dashboard';
import MyCases from './pages/system/myCases';
import FollowCase from './pages/system/myCases/casesDetails';
import NewCases from './pages/system/newCases';
import NewCasesDetails from './pages/system/newCases/newCasesDetails';
import RegisterNewCase from './pages/system/registerNewCase';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                {/* Rotas do Site */}
                <Route path="/" exact component={About} />
                <Route path="/sobre" component={About} />

                {/* Rotas do Sistema */}
                <Route path="/login" component={Login} />
                <Route path="/tipo-de-cadastro" component={RegisterType} />
                
                <Route path="/cadastro-de-angeluz" component={RegisterAngeluz} />
                <Route path="/cadastro-de-usuario" component={Registeruser} />
                <Route path="/perfil" component={Profile} />            
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/meus-casos" component={MyCases} />
                <Route path="/acompanhe-seu-caso/:id" component={FollowCase} />  
                <Route path="/novos-casos" component={NewCases} />
                <Route path="/detalhes-caso/:id" component={NewCasesDetails} />                
                <Route path="/cadastrar-caso" component={RegisterNewCase} />
            </Switch>
        </BrowserRouter>
    )
}