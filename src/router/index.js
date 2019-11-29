import {Cart,Classify,Meng,Mine,Selected,} from "../pages";
import  Classifytabone from "../components/classifytab/tabone/tabone";
import  Classifytabtwo  from "../components/classifytab/tabtwo/tabtwo";
export const FootBarRoutes=[
    {
        path:"/selected",
        component:Selected,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"iconfont icon--xiaogou",
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        text:"分类",
        icon:"iconfont icon-fenlei",   
        children:[
            {
                path:"/classify/tabone",
                component:Classifytabone,
                meta:{
                    flag:true
                },
            },
            {
                path:"/classify/tabtwo",
                component:Classifytabtwo,
                meta:{
                    flag:true
                },
            }
        ]
    },
    {
        path:"/meng",
        component:Meng,
        meta:{
            flag:true
        },
        text:"小萌书",
        icon:"iconfont icon-shu",   
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        requiredAuth: true,
        text:"购物车",
        icon:"iconfont icon-gouwuche",   
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true
        },
        text:"我的E宠",
        icon:"iconfont icon-wode",   
    },
];


export const NoFootBarRoutes=[
    // {
    //     path:"/cart",
    //     component:Cart,
    //     meta:{
    //         flag:true
    //     },
    //     requiredAuth: true,
    //     text:"购物车",
    //     icon:"&#xe622;",   
    // },
];

export const routeConfig=FootBarRoutes.concat(NoFootBarRoutes)