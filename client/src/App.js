import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <HelloComponent name="Carlos"/>
                <BooleanAct val={false}/>
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }
}

class HelloComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

class BooleanAct extends React.Component {
    render() {
        if (this.props.val === true)
            return <div>TRUE {this.props.name}</div>;
        else
            return <div>FALSE {this.props.name}</div>;
    };
}

export default App;