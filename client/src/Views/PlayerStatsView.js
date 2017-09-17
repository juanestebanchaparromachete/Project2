import React from 'react'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'
import '../App.css';
import '../PlayerStats.css';
import ReactDOM from 'react-dom'
import AddPlayers from './AddPlayers'

class PlayerStatsView extends React.Component {
    state = {users: []}

    componentDidMount() {
        console.log(this.props);
        fetch('/players/Federer/Results')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        // console.log(this.props);
        return (

            <div className="App">
                <section id="playerCardSection">
                    <div className="container py-3">
                        <div className="card">
                            <div className="row ">
                                <div className="col-md-4">
                                    <img
                                        src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400"
                                        className="w-100"></img>
                                </div>
                                <div className="col-md-8 px-3">
                                    <div className="card-block px-3">
                                        <h4 className="card-title">{this.props.routeParams.name}</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="row text-center">
                    {this.state.users.map((user, i) =>
                        <AddPlayers key={i} name={user.name} url={user.url} points={user.points} age={user.age}/>
                    )}
                </div>
            </div>
        );
    }
}

export default PlayerStatsView;