import React, { Component } from 'react'
import './Mine.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import IconItem from './Common/IconItem'
import Title from './Title'
class Mine extends Component {
    constructor () {
        super()
        this.state = {
            footIcon:[
                {
                    icon:'iconfont icon-atm',
                    name:'订单1',
                    color:'red'
                },
                {
                    icon:'iconfont icon-atm',
                    name:'订单2',
                    color:'#ccf'
                },
                {
                    icon:'iconfont icon-home',
                    name:'订单3',
                    color:'#cfc'
                },
                {
                    icon:'iconfont icon-jewelry',
                    name:'订单4',
                    color:'yellow'
                },
                {
                    icon:'iconfont icon-atm',
                    name:'订单5',
                    color:'pink'
                }
            ]
        }
    }
    render() {
        const {footIcon} = this.state;
        return (
            <div>
               <Header></Header>
               <Main>
                   <Title></Title>
               </Main>
               <Footer>
                    {
                       footIcon.map((item,ind) => {
                            return <IconItem icon={item.icon}
                            name={item.name}
                            color={item.color}
                            key={ind}
                            />
                        })
                   } 
               </Footer>
            </div>
        )
    }
}
export default Mine;
