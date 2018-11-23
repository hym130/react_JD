import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className='head'>
                <dl>
                    <dt>
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2557066440,2845842574&fm=11&gp=0.jpg" alt=""/>
                    </dt>
                    <dd>
                        <h2>用户名</h2>
                        <p>已经绑定微信</p>
                    </dd>
                </dl>
             
            </header>
        )
    }
}
export default Header;
