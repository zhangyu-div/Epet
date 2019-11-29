import styled from "styled-components";
export const Header=styled.div`
    padding: 0 0.15rem;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: .4rem;
    z-index: 11;
    background:#fff;
    .pinpai,.fenlei{
        width:50%;
        height:.4rem;
        line-height:.4rem;
        font-weight:700;
        font-size:.13rem;
    }
    .fenlei{
        float:left;
        padding-right:6%;
        text-align:right;
    }
    .pinpai{
        float:right;
        padding-left:6%;
    }
    a{
        color: #333;
        span{
            display: inline-block;
            height: .4rem;
            padding: 0 .04rem;
            cursor: pointer;
        }
        .cur{
            color:#41C856;
            border-bottom: 0.02rem solid #41C856;
        }
    }
    i{
        position: absolute;
        right: .15rem;
        width: .14rem;
        height: .14rem;
    }

`