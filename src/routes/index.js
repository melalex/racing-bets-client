/**
 * Created by melalex on 4/10/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import Register from "../containers/Register";
import RaceList from "../containers/RaceList";
import BetList from "../containers/BetList";
import MakeBetPage from "../containers/MakeBetPage";
import Gallery from "../containers/Gallery";
import AboutUsPage from "../containers/AboutUsPage";

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={RaceList}/>

            <Route path="/bets" component={BetList}/>
            <Route path="/betting" component={MakeBetPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/gallery" component={Gallery}/>
        </Route>
        <Route path="/about" component={AboutUsPage}/>
        <Route path='*' component={NotFound}/>
    </div>
);