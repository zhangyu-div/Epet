import React,{Fragment}from "react";
import {Header} from "./styled";
import {withRouter} from "react-router-dom";
class Classify  extends React.Component{
    constructor(){
        super();
        this.state={
            cur:true
        }
    }
    render(){
        let {cur}=this.state;
        return(
            <Fragment>
                <Header>
                    <div className="fenlei">
                        <a><span className={cur?'cur':''} onClick={this.handletoggle.bind(this)}>分类</span></a>
                    </div>
                    <div className="pinpai">
                        <a><span className={!cur?'cur':''}  onClick={this.handletoggles.bind(this)}>品牌</span></a>
                        <i className="iconfont icon-sousuo " ></i>
                    </div>
                </Header>
            </Fragment>
        )
    }
    handletoggle(){
        this.props.history.push("./tabone")
        this.setState({
            cur:true
        })
    }
    handletoggles(){
        this.props.history.push("./tabtwo")
        this.setState({
            cur:false
        })
    }
}
export default withRouter(Classify);