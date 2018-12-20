export default [
    {
        //个人中心
        path:'personal',
        component: resolve => require(['@/components/center/children/personal'],resolve)
    },
    {
        //个人中心
        path:'classs',
        component: resolve => require(['@/components/center/children/classs'],resolve)
    },
    {
        //个人中心
        path:'order',
        component: resolve => require(['@/components/center/children/order'],resolve)
    },
    {
        //个人中心
        path:'coll',
        component: resolve => require(['@/components/center/children/coll'],resolve)
    },
]