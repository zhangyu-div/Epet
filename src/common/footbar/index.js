import React,{Fragment}from "react"
import {Footer} from "./styled";
import {FootBarRoutes} from "../../router";
import {withRouter} from "react-router-dom";
class Footbar extends React.Component{
    constructor(){
        super(); 
        this.state={
            activeIndex:0
        }
    }
    render(){
        let {activeIndex}=this.state;
        // console.log(FootBarRoutes);
        return (
            <Fragment>
                <Footer>
                <ul>
                    {
                        FootBarRoutes.map((item,index)=>(
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path,index)} className={activeIndex==index?'active':""}>
                                <i className={item.icon}> </i>
                                <span>{item.text}</span>
                            </li>
                            )
                        )
                    }
                </ul>
                </Footer>
            </Fragment>
        )
    }
    handleTo(path,index){
        console.log(withRouter)
        this.props.history.push(path);
        this.setState({
            activeIndex:index
        })
    }
}

export default withRouter(Footbar);