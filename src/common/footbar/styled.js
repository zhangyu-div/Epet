import styled from "styled-components";
export const Footer = styled.div`
    position: fixed;
    width: 100%;
    height:.52rem;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 99;
    -webkit-box-shadow: 1px 2px .25rem 0px rgba(0,0,0,0.1);
    box-shadow: 1px 2px .25rem 0px rgba(0,0,0,0.1);
    ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>.active{
            color:#c33;
        }
    }
    li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i{
            font-size: .2rem;
        }
        span{
            margin-top:0.05rem;
            font-size:0.1rem;
        }
    }
`