import styled from "styled-components";
export const Contenter =styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  padding-top: .40rem;
  padding-bottom: .52rem;
  display:flex;
`
export const Leftlist=styled.div`
  position: fixed;
  top: 0.4rem;
  left: 0;
  overflow-y: scroll;
  bottom: 0;
  padding-bottom: .45rem;
  border-right:.05rem solid #f3f4f5;
  background:#fff;
  li{
    border-bottom:.01rem solid #f3f4f5;
    width: .70rem;
    height: .5rem;
    text-align:center;
    line-height:.5rem;
    font-size: .13rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .active{
    background: #f3f4f5;
    color: #41C856;
  }
`
export const Rightlist=styled.div`
    margin-left: .75rem;
    border-top:.05rem solid #f3f4f5;
    background: #fff;
    overflow:auto;
    .lots{
      padding: .05rem .05rem .20rem;
      border-top:1px solid #f3f4f5;
      width:100%;
      p{
        display:flex;
        width:100%;
        justify-content:space-between;
        font-size:.12rem;
        color: #999;
        padding-left:.05rem;
        margin-top:.10rem;
        span{
          display:block;
          i{
            font-size:.10rem;
          }
        }
      }
      ul{
        overflow:hidden;
        li{
          width: 33.33%;
          padding: 0.05rem;
          float:left;
          margin-top: .10rem;
          a{
            width:100%;
            height:100%;
            display:block;
            div{
              width:100%;
              height:.86rem;
              img{
                width:100%;
                height:100%;
              }
            }
            p{
              text-align:center;
            }
          }
        }
      }
    }
    .bottomlots{
      padding:.05rem .05rem .20rem;
      border-top:.01rem solid #f3f4f5;
      p{
        font-size:.12rem;
        color: #999;
        padding-left:.05rem;
        margin-top:.10rem;
      }
      ul{
        overflow:hidden;
        li{
          width:50%;
          padding: .05rem;
          float:left;
          margin-top: .10rem;
          a{
            display:block;
            div{
              width:100%;
              height:.55rem;
              border:.01rem solid #f3f4f5;
              img{
                width:100%;
                height:100%;
              }
            }
            p{
              text-align:center;
            }
          }
        }
      }
    }


`