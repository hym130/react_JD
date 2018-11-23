import React, { Component } from 'react'
import './Shopcart.css';

/*//高阶组件
const HOCshop = (Com) => {
    return class extends Component {
        // fn (shop) {
        //         //这个shop就是基础组件
        //         console.log(shop,'shop');
        // }


        constructor () {
            super()
            this.state = {
                value:'胡一天'
            }
        }
        chan (e) {
            this.setState = {
                value:e.target.value
            }
            console.log(e.target.value,'eee');
        }
        render() {
            // console.log(this.props,'lll');
            // const name = '胡一天'
            
            //const props = Object.assign({},this.props,{ref:this.fn.bind(this)})//可以拿到基础组件的实例

            const name = {
                value:this.state.value,
                onChange :this.chan.bind(this)
            }
            return (
                <div style={{background:'pink'}}>*/
                    {/* 把this.props穿过去 让下边的基础组件有内容 不是空对象 */}
                    {/* <Com {...this.props} name={name}/> */}
                    {/* <Com {...this.props} value={this.state.value} change={this.chan.bind(this)}/> */}
                    /* <Com {...this.props} name={name}/>
            </div>
            )
        }
    }
}
//基础组件*/

const HOCshop = (Com) => {
    return class child extends Com{
        render() {
            return (
            //super就是Shopcart
             super.render()
                
            )
        }
    }

}
@HOCshop
class Shopcart extends Component {
   
    render() {
         console.log(this.props);//打印的空对象
        return (
            <div>
                 Shopcart
                 {/* <input type="text"
                  value={this.props.value}
                  onChange={this.props.change}
                   /> */}
                    {/* <input type="text"
                    {...this.props.name}/> */}
            </div>
        )
    }
}
// export default HOCshop(Shopcart);
export default Shopcart;
