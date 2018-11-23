import React, { Component } from 'react'
import './Home.css';
import { connect } from 'react-redux'
import axios from 'axios'
import List from '../List'
import {JDLIST} from '../../api/interface.js'
import {getJDlist} from '../../api/servers.js'
import {homes} from '../../store/actions/home.js'
const className = 'box'
class Home extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         jdList: null
    //     }
    // }
    componentDidMount() {
        const { dispatch } = this.props;//链接了connect就可以结构dispatch
        getJDlist().then((res) => {
            const data = JSON.parse(res.data.recommend)
            if (data.code !== "0") return
            // this.setState({
            //     jdList: jdList.wareInfoList
            // })
            dispatch(homes(data))//store/actions/home.js的home方法里调用
        })

            .catch(e => {
                throw Error(e)
            })
    }
    //点击跳转路由到content
    goContent () {
        const { history } = this.props;
        history.push('/content')
    }
    render() {
        // const { jdList } = this.state;
         const { jdList } = this.props;
         
        return (
            <div className={className}>
                <h2 onClick={this.goContent.bind(this)}>点击进入>></h2>
                 {
                    jdList !== null && jdList.map((item, index) => {
                        return <List {...item} key={index}></List>
                    })
                } 

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    //取数据的
    console.log(state.home.jdList)
    return {
        homeKey: state.home.name,
        jdList:state.home.jdList
    }
}
export default connect(mapStateToProps)(Home);
