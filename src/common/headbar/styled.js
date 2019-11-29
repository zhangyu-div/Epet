import styled from "styled-components";
export const Header = styled.div`
    width: 100%;
    height: .5rem;
    background:#fff;
    line-height: .5rem;
    color:#333;
    position: relative;
    display:flex;
    justify-content:space-around;
    border-bottom:1px solid #e5e5e5;
    font-size:0.18rem;
    .iconfont{
        font-size:.24rem;
    }
    .book{
        margin:0 1rem;
    }
`



export const HeaderOpen = styled.div`
    height: 0.65rem;
    background:#fff;
    display:none;
    justify-content:space-around;
    a{
        display:block;
        padding-top:0.1rem;
        div{
            color: #666;
            text-align:center;
            font-size:.15rem;
        }
        .iconfont{
            font-size:0.25rem;
        }
    }
`