import React, {Component} from 'react';
import './App.css';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'

class App extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={PlayersView}/>
                <Route path='/:name/stats' component={PlayerStatsView}/>
                <Route path='*' component={NotFound}/>
            </Router>
        )
    }
}

class PlayerStatsView extends React.Component {
    state = {users: []}
    componentDidMount() {
        fetch('/players/Federer/Results')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        console.log(this.props);
        return (

            <div className="App">
                <div className="row text-center">
                    {this.state.users.map((user, i) =>
                        <AddPlayers key={i} name={user.name} url={user.url} points={user.points} age={user.age}/>
                    )}
                </div>
            </div>
        );
    }
}

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;

    </div>
)

const NotFound = () => (
    <h1>404.. This page is not found!</h1>)

class PlayersView extends React.Component {
    state = {users: []}

    componentDidMount() {
        fetch('/players')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <div className="row text-center">
                    {this.state.users.map((user, i) =>
                        <AddPlayers key={i} name={user.name} url={user.url} points={user.points} age={user.age}/>
                    )}
                </div>
            </div>
        );
    }
}

class AddPlayers extends React.Component {
    render() {
        return <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
                <img className="card-img-top" src={this.props.url} alt="Profile pic"></img>
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">Current player points: {this.props.points} <br/> Player
                        age: {this.props.age}</p>
                </div>
                <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'+this.props.name+'/stats'}>Find Out More</Link>
                    {/*<button >Find Out More!</button>*/}
                </div>
            </div>
        </div>;
    }
}

export default App;