/**
 * Created by melalex on 4/10/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import Register from "../containers/Register";

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>

            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);