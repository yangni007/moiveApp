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
            top: 0,
            elLeft: 0,
            elTop: 0
        },
        dragFlag: false
    }
    componentDidMount() {
        let el = document.getElementById('box')
        document.onmousemove = (e) => {
            e = e || event;
            if(this.state.dragFlag) {
                let offset = this.state.offset,
                    moveX = e.clientX - offset.left,
                    moveY = e.clientY - offset.top,
                    left = offset.elLeft,
                    top = offset.elTop;
                el.style.left = left + moveX + 'px';
                el.style.top = top + moveY + 'px';
                offset = {
                    left: e.clientX,
                    top: e.clientY,
                    ...offset
                }
                this.setState({offset: offset})
            }
        }
    }
    mouseDownEvent = (e) => {
        e.persist()
        let offset = {
            left: e.clientX,
            top: e.clientY,
            elLeft: e.target.offsetLeft,
            elTop: e.target.offsetTop
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
                {/* 普通的div拖拽 */}
                <div 
                className="box" 
                id="box"
                onMouseDown={this.mouseDownEvent}
                // onMouseMove={this.mouseMoveEvent}
                onMouseUp={this.mouseUpEvent}>普通的div拖拽
                </div>
            </div>
            
        )
    }
}