import {Cart,Classify,Meng,Mine,Selected,} from "../pages";
import  Classifytabone from "../components/classifytab/tabone";
import  Classifytabtwo  from "../components/classifytab/tabtwo";
export const FootBarRoutes=[
    {
        path:"/selected",
        component:Selected,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"",
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"",   
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
        path:"/mine",
        component:Mine,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"",   
    },
    {
        path:"/meng",
        component:Meng,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"",   
    },
];


export const NoFootBarRoutes=[
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        requiredAuth: true,
        text:"精选",
        icon:"",   
    },
];

export const routeConfig=FootBarRoutes.concat(NoFootBarRoutes)