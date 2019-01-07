import React from 'react';
import { Link} from 'react-router-dom'

import { List } from 'antd-mobile';

const Item = List.Item;
require('../asset/css/home.scss')

class Home extends React.Component {
    
    
    render() {
        return (
            <div className="home">
                <div className="main">
                    <div className="title">目录</div> 
                </div>
                <List>
                    <Link  to="/movie">
                        <Item arrow="horizontal" >电影</Item>
                    </Link>
                </List>
                <List>
                    <Link  to="/drag">
                        <Item arrow="horizontal" >拖拽</Item>
                    </Link>
                </List>
            </div>
        )
    }
}

export default Home