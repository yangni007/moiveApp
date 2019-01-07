import React from 'react';
import { render } from 'react-dom'
import { Link} from 'react-router-dom'
require('../../asset/css/drag/drag.scss')

import { List } from 'antd-mobile';

const Item = List.Item;

export default class UserCenter extends React.Component{
    state = {
        offset: {
            left: 0,
            top: 0
        },
        dragFlag: false
    }
    mouseDownEvent = (e) => {
        e.persist()
        let offset = {
            left: e.clientX,
            top: e.clientY
        }
        this.setState({offset: offset, dragFlag: true})
    }
    mouseMoveEvent = (e) => {
        e.persist()
        if(this.state.dragFlag) {
            let offset = this.state.offset,
                moveX = e.clientX - offset.left,
                moveY = e.clientY - offset.top,
                left = e.target.offsetLeft,
                top = e.target.offsetTop;
            e.target.style.left = left + moveX + 'px';
            e.target.style.top = top + moveY + 'px';
            offset = {
                left: e.clientX,
                top: e.clientY
            }
            this.setState({offset: offset})
        }
    }
    mouseUpEvent = (e) => {
        this.setState({dragFlag: false})
    }
    render() {
        return (
            <div>
                <div 
                className="box" 
                onMouseDown={this.mouseDownEvent}
                onMouseMove={this.mouseMoveEvent}
                onMouseUp={this.mouseUpEvent}></div>
            </div>
            
        )
    }
}