import React from 'react';
import { Link} from 'react-router-dom'

import { List } from 'antd-mobile';

const Item = List.Item;

class Home extends React.Component {
    
    
    render() {
        return (
            <div>
                <List>
                    <Link  to="/movie">
                        <Item arrow="horizontal" >电影</Item>
                    </Link>
                    <Link  to="/drag">
                        <Item arrow="horizontal" >拖拽</Item>
                    </Link>
                </List>
            </div>
        )
    }
}

export default Home