import React, { Component } from 'react'
import './Shopcart.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { shopDate } from '../../api/servers.js'
import { getShopc, requestShopC } from '../../store/actions/shopCart'
class Shopcart extends Component {
    constructor() {
        super()
        this.state = {
            checkValue: []
        }
    }
    componentDidMount() {

        shopDate().then((res) => {

            const { getShopc, requestShopC } = this.props;
            const data = res.data[0].active_item
            //存数据到redux

            requestShopC()
            getShopc(data)
        })


    }
    //购物车的加减功能
    add(id, num) {
        console.log(num, '2');
        axios.post('/api/shopc_num', {
            //第二个参数可以传参
            id,
            num
        })
            .then(res => {
                //现在数据改了 但是页面不更改 现在要做的就是更改数据到页面
                //更改数据会用到dispatch
                const { getShopc, requestShopC } = this.props;
                const data = res.data[0].active_item
                requestShopC()
                getShopc(data)
                //this.forceUpdate()这样可以 但是不合理
                //请求数据有三种状态 请求中request success请求成功 error请求失败
            })
    }
    fn(e) {
        console.log(e.target.value);
        const { value, checked } = e.target
        let { checkValue } = this.state
        //选中时和数组中没有
        if (checked && checkValue.indexOf(value) === -1) {
            checkValue.push(value)
        } else {
            //数组中有就为删除
            checkValue = checkValue.filter(x => x !== value)
        }
        this.setState({
            checkValue
        })


    }
    //全选的功能
    Allcheck(e) {
        const {checked} = e.target;
        const { shopCart} = this.props;
        let newArr = [];
        if(checked){
            shopCart.filter(x=>newArr.push(x.id))
        }
        this.setState({
            checkValue:newArr
        })
    }
    render() {
        //console.log(this.props);//打印的空对象
        const { shopCart} = this.props;
        const {checkValue } = this.state;
        return (
            <div>
                {
                    shopCart !== null ?
                        <div>
                            {
                                shopCart.map((key, ind) => {
                                    return (
                                        <div key={ind} className='list'>

                                            <dl>
                                                <input type="checkbox"
                                                    className='check'
                                                    value={key.id}
                                                    checked={this.state.checkValue.indexOf(key.id) !== -1}
                                                    onChange={this.fn.bind(this)}
                                                />
                                                <dt>
                                                    <img src={key.images.cart} alt="" />
                                                </dt>
                                                <dd>
                                                    <h2>{key.name}</h2>
                                                    <div className='btn'>
                                                        <button onClick={this.add.bind(this, key.id, -1)}>-</button>
                                                        <span>{key.quantity}</span>
                                                        <button onClick={this.add.bind(this, key.id, +1)}>+</button>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    )
                                })
                            }

                            <p className='allcheck'>
                                全选:
                                <input type="checkbox"
                                 checked={checkValue.length === shopCart.length}
                                 onChange={this.Allcheck.bind(this)}
                                />
                                {/* checked={checkValue.length === shopCart.length} */}
                            </p>
                        </div>
                        : ""
                }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    //console.log(state.shopCart.data)
    return {
        shopCart: state.shopCart.data
    }
}
const mapDispatchToProps = {
    getShopc,
    requestShopC
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);




'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   API_ROOT: '"http://testcrawlermanage.qingju.cn"'
// })

