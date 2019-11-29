import styled from "styled-components";
export const Content =styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  padding-top: .40rem;
  padding-bottom: .52rem;
  overflow:auto;
  .wrapper{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
  }
  .pinpailist{
    padding-bottom: 0.15rem;
    margin-bottom: 0.1rem;

  .ft12{
    font-size:.12rem;
  }
  .c999{
    color:#999;
  }
  .center{
    text-align:center;
  }
  .title{
      height:.4rem;
      color:#999;
      padding-top:0.2rem;
  }
  li{
    margin-top: 0.2rem;
    width: 33.33%;
    padding: 0 0.05rem;
    position: relative;
    float: left;
    a{
      display: block;
      color: #333;
      .imgs{
        border: 1px solid #e2e2e2;
        text-align: center;
        height:0.61rem;
        width:100%;
        text-align:center;
        padding:8%;
        img{
          height:100%;
          width:100%;
          display:inline-block;
        }
      }
      p{
          height: 0.2rem;
          width:100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 0.05rem;
          font-size:.13rem;
          text-align:center;
        }
    }
  }
}
`