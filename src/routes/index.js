/**
 * Created by melalex on 4/10/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";
import NotFound from "../containers/NotFound";

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>

        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);