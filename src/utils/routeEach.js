//遍历路由表
import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

export default (routes) => {
    function isLogin(config) {
        if (config.path != "/login" && config.meta.requiredAuth) {
            if (localStorage.getItem("token")) {
                if (config.children) {
                    return childrenMap(config)
                } else {
                    return <config.component />
                }
            } else {
                return <Redirect to="/login" />
            }
        } else {
            if (config.children) {
                return childrenMap(config)
            } else {
                return <config.component />
            }
        }
    }


    //遍历子级路由
    function childrenMap(childNodes) {
        return (
            <Route path={childNodes.path} render={() => {
                return (
                    <Fragment>
                        <Route component={childNodes.component} />
                        <Switch>
                            {
                                childNodes.children.map((child) => {
                                    return (
                                        <Route path={child.path} key={child.path} render={() => {
                                            return isLogin(child);
                                        }} />
                                    )
                                })
                            }
                            <Redirect from={childNodes.path} to={childNodes.children[0].path} exact/>
                        </Switch>
                    </Fragment>
                )
            }} />
        )
    }
    return routes.map(item => {
        return <Route path={item.path} key={item.path} render={() => {
            return isLogin(item);
        }} />
    })
}

{/* <Route path="/home" render={()=>{
    return (
      <Fragment>
          <Redirect from="/home" to="/home/hotmovie"/>
          <Route path="/home" component={Home}/>
          <Switch>
              <Route path="/home/hotmovie" exact component={HotMovie}/>
              <Route path="/home/commingmovie"  component={CommingMovie}/>
              <Route path="/home/hotmovie/abc" component={HotABC}/>
          </Switch>

      </Fragment>
    )
}}/> */}