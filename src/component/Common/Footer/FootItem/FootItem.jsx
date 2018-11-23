import React, { Component } from 'react'
import './FootItem.css';

const className = 'footer-item';
class FootItem extends Component {
    render() {
        const { icon,title } = this.props;
        
        return (
            <div className={className}>
                <i className={icon}></i>
                <span>{title}</span>
            </div>
        )
    }
}
export default FootItem;
