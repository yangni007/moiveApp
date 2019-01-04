import React from 'react';
import { render } from 'react-dom'
import { Link} from 'react-router-dom'
require('../../asset/css/user/drag.scss')

import { List } from 'antd-mobile';

const Item = List.Item;

export default class UserCenter extends React.Component{
    state = {
        offset: {
            left: 0,
            top: 0
        }
    }
    mouseDownEvent = (e) => {
        console.log(e)
        let offset = {
            left: e.clientX,
            top: e.clientY
        }
        this.setState({offset: offset})
    }
    mouseMoveEvent = (e) => {
        
    }
    render() {
        return (
            <div>
                <div className="box" onMouseDown={this.mouseDownEvent}></div>
            </div>
            
        )
    }
}