import React,{Fragment} from "react";
import {HashRouter as Router,Switch,Redirect} from "react-router-dom"; 
import routeEach from "./utils/routeEach";
import {routeConfig} from "./router";
import Footbar from "./common/footbar";
class App extends React.Component{
    constructor(){
        super(); 
    }   
    render(){
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Redirect from="/" to="/selected" exact/>
                        {routeEach(routeConfig)} 
                    </Switch>
                </Router>
                <Footbar></Footbar>
            </Fragment>
        )
    }
   
}


export default App;

