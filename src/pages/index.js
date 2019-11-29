//路由的懒加载
import Loadable from "react-loadable";
import Loading from "../common/loading";

export const Selected = Loadable({
    loader:()=>import("./selected"),
    loading:Loading
})


export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})



export const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})
export const Classifytabone = Loadable({
    loader:()=>import("../components/classifytab/tabone/tabone"),
    loading:Loading
})
export const Classifytabtwo = Loadable({
    loader:()=>import("../components/classifytab/tabtwo/tabtwo"),
    loading:Loading
})



export const Meng = Loadable({
    loader:()=>import("./meng"),
    loading:Loading
})



export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

