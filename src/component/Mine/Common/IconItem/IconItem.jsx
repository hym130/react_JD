import React, { Component } from 'react'
import './IconItem.css';

class IconItem extends Component {
    render() {
        const {icon,name,color} = this.props
        return (
            <div>
                <i className={icon} style={{color:color}}></i>
                <span>{name}</span>
            </div>
        )
    }
}
export default IconItem;
