import React, { Component } from 'react'
import './Luckly.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// const HOCluck = (datas) => {
//     console.log(datas);
//     return function mewLuck(ZuJ) {
//         return class extends Component {
//             render() {
//                 return (
//                     <div>
//                         <ZuJ {...this.props} {...datas}></ZuJ>
//                     </div>
//                 )
//             }
//         }
//     }
// }



 class Luckly extends Component {
//     constructor () {
//         super()
//         this.state = {
//             val:['北京','上海']
//         }
//     }
//     fn (e) {
//        const {options} = e.target;
//        //现在的options是一个对象 keys是去对象的键值 取到只后筛选被选中的 然后进行遍历
//        const arr = Object.keys(options)
//        .filter(i=>options[i].selected===true)
//        .map(i => options[i].value)
//        this.setState({
//            val:arr
//        })      
//         console.log(arr);
//     }
  
    constructor (){
        super()
        this.state={
            name:'胡一天'
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    componentDidMount () {
        this.setState({
            name:'24小时就是一天'
        })
    }
    componentWillUpdate (){
        console.log('改变了');
    }
    render() {
        const {name} = this.state
        return (  
            <div className='luck'>
                {/* <select multiple={true} value={this.state.val} onChange={this.fn.bind(this)}>
                    <option value="">北京</option>
                    <option value="">上海</option>
                    <option value="">天津</option>
                    <option value="">杭州</option>
                    <option value="">深圳</option>
                </select> */}
                {name}
            </div>
        )
    }
}
// const datas = {
//     name:'zs'
// }
// export default HOCluck(datas)(Luckly);
export default Luckly;
