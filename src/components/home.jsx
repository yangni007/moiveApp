import React from 'react';
import { Link} from 'react-router-dom'

import { List } from 'antd-mobile';

const Item = List.Item;

class Home extends React.Component {
    
    
    render() {
        return (
            <div>
                <h1 className='main'>目录</h1>
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