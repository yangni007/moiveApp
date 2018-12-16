import React from 'react';
import { render } from 'react-dom'

import { BrowserRouter,  Route, Switch, withRouter} from 'react-router-dom';

import { NavBar, Icon } from 'antd-mobile';

class WriteComment extends React.Component{
    constructor(props, context) {
        super(props, context)
        console.log(context)
    }
    back = () => {
        this.props.history.push('/', {active: 2})
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.back}
                    >写评论</NavBar>
            </div>
        )
    }
}

export default WriteComment
// export default withRouter(WriteComment)