import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Application from './application/Application';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/application/:applicationName/:appId" exact component={Application}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
