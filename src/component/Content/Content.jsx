import React, { Component } from 'react'
import './Content.css';
import {getContent} from '../../api/servers.js'
import {connect} from 'react-rudex'
class Content extends Component {
    constructor () {
        super()
        this.state = {
            pageIndex:0
        }
    }
    componentDidMount () {
        this.getContentData()
    }
    getContentData (pageIndex = 0,pageSize = 10) {
        return getContent({
            limit:{
                pageIndex,
                pageSize
            },
            nonce:new Date()
        })
         .then(res=>{
             console.log(res,'res');
            return res
            
        })
    }
    //点击下一页
    nextPage (){
        const {pageIndex} = this.state;
        
        this.setState({
            pageIndex:this.state.pageIndex+1
        })
        console.log(pageIndex,'kk');
        this.getContentData(pageIndex,10)
    }
    render() {
        return (
            <div>
                    文字
                    <button onClick={this.nextPage.bind(this)}>下一页</button>
            </div>
        )
    }
}
export default connect(Content);
