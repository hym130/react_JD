import axios from 'axios'
import {JDLIST} from './interface'
import {JDdata} from './interface'
import {shopData,CONTENT} from './interface'

export const getJDlist = () =>{
    return axios.get(JDLIST)
}
export const getJData = () =>{
    return axios.get(JDdata)
}
export const shopDate = () =>{
    return axios.get(shopData)
}

export const getContent = (params) =>{
    return axios.post(CONTENT,params)

}