import React from 'react';
import { Switch, Route } from "react-router-dom";
import General from './General';
import Status from './Status';
import SearchAccount from './SearchAccount';
import Search from './Search';
import SearchService from './SearchService';
import SearchEarning from './SearchEarning';
import SearchChangeLog from './SearchChangeLog';

export default function Content() {

    return (
        <Switch>
            <Route exact path="/search" component={General}/>
            <Route path="/general" component={General}/>
            <Route path="/status" component={Status}/>
            <Route path="/search-account" component={SearchAccount}/>
            <Route path="/search-service" component={SearchService}/>
            <Route path="/search-earning" component={SearchEarning}/>
            <Route path="/search-change-log" component={SearchChangeLog}/>
        </Switch>
    )
}
