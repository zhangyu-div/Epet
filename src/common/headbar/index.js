import React,{Fragment}from "react"
import {Header,HeaderOpen} from "./styled";
class Headbar extends React.Component{
    constructor(){
        super(); 
        this.state={
            flag:false
        }
    }
    render(){
        let {flag}=this.state;
        return (
            <Fragment>
                <div>
                    <Header>
                        <div className="iconfont icon-iconfontjiantou1"></div>
                        <div className="book">小萌书</div>
                        <div className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-" onClick={this.hanleopen.bind(this)}></div>
                    </Header>
                    <HeaderOpen style={{display:flag?'flex':'none'}}>
                        <a><div className="iconfont icon-shouye1"></div><div>首页</div> </a>
                        <a><div className="iconfont icon-fenlei"></div><div>商品分类</div> </a>
                        <a><div className="iconfont icon-gouwuche"></div><div>购物车</div> </a>
                        <a><div className="iconfont icon--xiaogou"></div><div>我的e宠</div> </a>
                    </HeaderOpen>
                </div>
            </Fragment>
        )
    }
    hanleopen(){
        // if(this.state.flag){
            this.setState({
                flag:!this.state.flag
        //     })
        // }else{
        //     this.setState({
        //         flag:true
        //     })
        // }

    }


}

export default Headbar;