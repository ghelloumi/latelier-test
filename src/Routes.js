import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'

import NotFound from "./components/NotFound";
import Players from "./pages/Players";
import Player from "./pages/Player";

function Routes() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Players</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact component={Players}/>
                <Route path="/player/:playerId" exact component={Player}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes