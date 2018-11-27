import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name}
    }
    componentWillReceiveProps(nextProps){
        // 
        console.log(nextProps)
        this.setState({name: nextProps.name})
        
    }
    render() {
        return (
            <div>
                
                <div>{this.state.name}</div>
            </div>
        )
    }
}

export default Home