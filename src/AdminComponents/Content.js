import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import AdminService from './AdminService';
import Search from './Search';
import Review from  './Review'
import Task from  './Task'
import Liveoperation from './Liveoperation'
import Customers from './Customers'
import Liveoperationsdetails from './Liveoperationsdetails';
import Addservice from './Addservice';
import Servicetype from './Servicetype'
import Questionnair from "./Questionnair"
import SearchProfessional from "./SearchProfessional"
import CreateTask from  './CreateTask'
import NewTask from  './NewTask'
import ManageService from  './ManageService'
import ManageServiceType from  './ManageServiceType'


export default function Content() {

    return (
        <Switch>
            <Route exact path="/newAdmin" component={SearchProfessional}/>
            <Route path="/newAdmin/adminDasboard" component={Dashboard}/>
            <Route path="/newAdmin/service" component={AdminService}/>
            <Route path="/search" component={Search}/>
            <Route path="/newAdmin/review" component={Review}/>
            <Route path="/newAdmin/tasks" component={Task}/>
            <Route path="/newAdmin/live-operation" component={Liveoperation}/>
            <Route path="/newAdmin/customers" component={Customers}/>
            <Route path="/newAdmin/live-operations-details" component={Liveoperationsdetails}/>
            <Route path="/newAdmin/add-service" component={Addservice}/>
            <Route path="/newAdmin/service-type" component={Servicetype}/>
            <Route  exact path="/newAdmin/questionnair" component={Questionnair}/>
            <Route  exact path="/newAdmin/search-professional" component={SearchProfessional}/>
            <Route path="/newAdmin/createtask" component={CreateTask}/>
            <Route path="/newAdmin/newtask" component={NewTask}/>
            <Route path="/newAdmin/mangeService" component={ManageService}/>
            <Route path="/newAdmin/mangeServiceType" component={ManageServiceType}/>
        </Switch>
    )
}
