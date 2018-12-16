
import React from 'react';
import { render } from 'react-dom'

import MovieLists from '../movie/movieLists';
import movieDetail from '../movie/movieDetail';
import UserCenter from '../user/userCenter'

import { TabBar, Tabs, Icon } from 'antd-mobile';
const TabPane = Tabs.TabPane;

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }
    componentWillMount() {
        let active = this.props.location.state.active
        if(active) {
            this.setState({activeTab : active})
        }
    }
    render() {
       return(
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
                <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition="bottom">
                    <TabBar.Item
                    icon={<div style={{
                        width: '1rem',
                        height: '1rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center no-repeat' }}/>}
                    selectedIcon={<div style={{
                        width: '1rem',
                        height: '1rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center no-repeat' }}/>}
                    title="首页"
                    key="首页"
                    selected={this.state.activeTab === 0}
                    onPress={() => {
                        this.setState({activeTab: 0});}}>
                        <MovieLists/>
                    </TabBar.Item>
                    <TabBar.Item
                    icon={<Icon type="koubei-o" size="md" />}
                    selectedIcon={<Icon type="koubei" size="md" />}
                    title="影院"
                    key="影院"
                    selected={this.state.activeTab === 1}
                    onPress={() => {
                        this.setState({activeTab: 1}) }}>
                        影院
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="我的"
                    selected={this.state.activeTab === 2}
                    onPress={() => { this.setState({activeTab: 2}) }}>
                        <UserCenter/>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Tab;
