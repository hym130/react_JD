// import Home from '../component/Home'
// import Classify from '../component/Classify'
// import Mine from '../component/Mine'
// import Shopcart from '../component/Shopcart'
// import Luckly from '../component/Luckly'
// import Details from '../component/Details'
import Loading from '../component/Loading'
import Loadable from 'react-loadable';
//按需加载 一个一个解析
const Home = Loadable({
    loader: () => import('../component/Home'),
    loading: Loading

})
const Classify = Loadable({
    loader: () => import('../component/Classify'),
    loading: Loading

})
const Mine = Loadable({
    loader: () => import('../component/Mine'),
    loading: Loading

})
const Shopcart = Loadable({
    loader: () => import('../component/Shopcart'),
    loading: Loading

})
const Luckly = Loadable({
    loader: () => import('../component/Luckly'),
    loading: Loading

})
const Details = Loadable({
    loader: () => import('../component/Details'),
    loading: Loading

})
const Content = Loadable({
    loader: () => import('../component/Content'),
    loading: Loading

})
export let Router_MAP = {
    NAV:[
        {
            title:'首页',
            to:'/',
            icon:'iconfont icon-wxbzhuye',
            selected:'selected'
        },
        {
            title:'分类',
            to:'/classify',
            icon:'iconfont icon-icon3',
            selected:'selected'
        },
        {
            title:'福字',
            to:'/luckly',
            icon:'iconfont icon-all',
            selected:'selected'
        },
        {
            title:'购物车',
            to:'/shopcart',
            icon:'iconfont icon-cart',
            selected:'selected'
        },
         {
            title:'我的',
            to:'/mine',
            icon:'iconfont icon-account',
            selected:'selected'
        },
    ],
    Rouer_VIEW:[
        {
            path:'/',
            component:Home
        },
         {
            path:'/classify',
            component:Classify
        },
         {
            path:'/luckly',
            component:Luckly
        },
         {
            path:'/shopcart',
            component:Shopcart
        },
         {
            path:'/mine',
            component:Mine
        },
        {
            path:'/details',
            component:Details
        },
        {
            path:'/content',
            component:Content
        }
    ]
}