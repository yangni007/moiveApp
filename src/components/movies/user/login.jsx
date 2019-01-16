
import React from 'react';
import { render } from 'react-dom'

import { BrowserRouter,  Route, Switch} from 'react-router-dom';

import { InputItem, List, WingBlank, Flex, Button, Toast} from 'antd-mobile'; 

const api  = require('../../../api/fetch').default

export default class Login extends React.Component{
    state = {
        phone: '',
        password: '',
        phoneError: false,
        passError: false
    }
    changePhone = (val) => {
        if(val.replace(/\s/g, '').length > 11) {
            this.setState({phoneError: true})
            Toast.info('手机号长度不能大于11')
        } else {
            this.setState({phoneError: false})
        }
        this.setState({phone: val})
    }
    changePass = (val) => {
        if(val.trim() == '') {
            this.setState({passError: true})
        } else {
            this.setState({passError: false})
        }
        this.setState({password: val})
    }
    onErrorClick = () => {
        console.log(12)
        if(this.state.phoneError) {
            Toast.info('手机号长度不能大于11')     
        }
        if(this.state.passError) {
            Toast.info('密码不能为空')     
        }
    }
    login =() => {
        if(this.state.phoneError || this.state.passError) {
            Toast.info('请将用户名和密码输入正确再提交')
            return;  
        }
        let params = {
            password: this.state.password,
            phone: this.state.phone
        }
        
        api.login(params).then(res => {
            console.log(this.props)
            this.props.history.push('/movie')
        })
    }
    render() {
       return(
            <div>
                <WingBlank size="lg" className="mgt-30 mgb-30">
                    <Flex justify="center">
                        <img src={require('../../../asset/img/user-icon.png')} alt=""/>
                    </Flex>
                </WingBlank>
                <List  className="my-list">
                    <InputItem
                        type="text"
                        placeholder="188 8888 8888"
                        error= {this.state.phoneError}
                        onErrorClick={this.onErrorClick}
                        value={this.state.phone}
                        onChange= {this.changePhone}
                    >手机号码</InputItem>
                    
                    <InputItem
                        type="password"
                        error= {this.state.passError}
                        value={this.state.password}
                        onChange= {this.changePass}
                    >密码</InputItem>
                </List>
                <WingBlank size="lg" className="mgt-30 mgb-30">
                    <Button type="warning" size="middle" onClick={this.login}>登录</Button>
                </WingBlank>
            </div>
       )
    }
}


