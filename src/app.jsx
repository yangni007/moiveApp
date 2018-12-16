

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter,  Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux'
import todoApp from './reducers'
const store = createStore(todoApp)

require('./app.scss') 


import TabBar from './components/common/tabBar'
import MovieDetail from './components/movie/movieDetail'
import Login from './components/user/login'
import UserCenter from './components/user/userCenter'
import WriteComment from './components/user/writeComment'


class App extends React.Component{
    
    render() {
       return(
            <div>
                {this.props.children}
            </div>
       )
    }
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TabBar} router={Route}></Route>
                <Route path="/movieDetail" component={MovieDetail}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/writeComment" component={WriteComment} router={Route}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('app'))
