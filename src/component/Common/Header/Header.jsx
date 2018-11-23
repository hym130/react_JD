import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <input type="text" placeholder='搜索内容用的'/>
                <span>登录</span>
            </header>
        )
    }
}
export default Header;
