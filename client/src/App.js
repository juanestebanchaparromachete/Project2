import React, {Component} from 'react';
import './App.css';
import './PlayerStats.css';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'
import PlayersView from './Views/PlayersView.js'
import AddPlayers from './Views/AddPlayers.js'
import PlayerStatsView from './Views/PlayerStatsView.js'

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



const NotFound = () => (
    <h1>404.. This page is not found!</h1>)







export default App;