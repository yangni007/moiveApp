

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter,  Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'
// const store = createStore(todoApp)
const store = {}
require('./app.scss') 


import TabBar from './components/movies/common/tabBar'
import MovieDetail from './components/movies/movie/movieDetail'
import Login from './components/movies/user/login'
import Register from './components/movies/user/register'
import UserCenter from './components/movies/user/userCenter'
import WriteComment from './components/movies/user/writeComment'
import Drag from './components/drag/Drag'
import Home from './components/home'

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
    // <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/drag" component={Drag} ></Route>
                <Route path="/movie"  component={TabBar} router={Route}></Route>
                <Route path="/movieDetail" component={MovieDetail}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/writeComment" component={WriteComment} router={Route}></Route>
            </Switch>
        </BrowserRouter>
    // </Provider>
    ,
document.getElementById('app'))
