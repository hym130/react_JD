import React, { Component } from 'react'
import './List.css';
import {withRouter} from 'react-router-dom' ;

const className = 'list'

class List extends Component {
    getClick () {
        const {history,imageurl,wname} = this.props;
        //跳转页面 传参
        history.push({
            pathname:'/Details',//跳转
            state:{//传参
               imageurl,
               wname 
            }
        })
        console.log(this.props);
    }
    render() {
        const {imageurl,wname} = this.props
        return (
            <div className={className}
             onClick={this.getClick.bind(this)}
            >
                <img src={imageurl} alt=""/>
                <p>{wname}</p>
            </div>
        )
    }
}
export default withRouter(List);
