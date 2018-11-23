import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import jdList from './datas/jsList.json'
import jdData from './datas/pigjia.json'
import shopCat from './datas/shopCart.json'
import content from './datas/content.js'
const mock = new AxiosMockAdapter(axios)//进行数据的拦截

const contentData = {
    code:0,
    message:'ok',
    data:content
}

const jdDatas=()=>{
    mock.onGet('/api/list').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,jdList])
        })
    })
    //分页器
    mock.onPost('/api/content').reply((config)=>{
        const data = JSON.parse(config.data);
        const pageIndex = data.limit.pageIndex;
        const pageSize = data.limit.pageSize;
        //从100条里边截取10条数据
        const newContent = content.slice(pageIndex * pageSize,(pageIndex+1) * pageSize);
        return new Promise((resolve,reject)=>{
            resolve([200,newContent])
        })
    })
    mock.onGet('/api/data').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,jdData])
        })
    })
    mock.onGet('/api/shopCat').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,shopCat])
        })
    })
    mock.onPost('/api/shopc_num').reply((config)=>{
        const data = JSON.parse(config.data);
        const id = data.id;
        const num = data.num;
        const newArr = [...shopCat];
        let key = 0;
        //遍历数据中的id和获取到的id进行相比 一样的话  就取下标
        for(let [ind,list] of newArr[0].active_item.entries()){
             if(list.id===id){
                 key=ind
             }

        }
        newArr[0].active_item[key].quantity = newArr[0].active_item[key].quantity+num;

        return new Promise((resolve,reject)=>{
            resolve([200,newArr])
        })
    })
}
export default jdDatas