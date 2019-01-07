import React from 'react';
import { render } from 'react-dom'
import { Link} from 'react-router-dom'

import { List } from 'antd-mobile';

const Item = List.Item;

export default class UserCenter extends React.Component{
    
    render() {
        return (
            <div>
                <List>
                    <Link  to="/writeComment">
                        <Item arrow="horizontal">我的评论</Item>
                    </Link>
                </List>
            </div>
            
        )
    }
}