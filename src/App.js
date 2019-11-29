import React,{Fragment} from "react";
import {HashRouter as Router,Switch,Redirect} from "react-router-dom"; 
import routeEach from "./utils/routeEach";
import {routeConfig} from "./router";
import Footbar from "./common/footbar";
import Headbar from "./common/headbar";
class App extends React.Component{
    constructor(){
        super(); 
    }   
    render(){
        return(
            <Fragment>
                <Router>
                    <Headbar></Headbar>
                    <Switch>
                        <Redirect from="/" to="/selected" exact/>
                        {routeEach(routeConfig)} 
                    </Switch>
                    <Footbar></Footbar>
                </Router>
            </Fragment>
        )
    }
   
}


export default App;

