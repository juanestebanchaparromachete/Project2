import React from 'react'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'
import '../App.css';
import '../PlayerStats.css';
import ReactDOM from 'react-dom'

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
                    <Link className="btn btn-primary" to={'/' + this.props.name + '/stats'}>Find Out More</Link>
                    {/*<button >Find Out More!</button>*/}
                </div>
            </div>
        </div>;
    }
}

export default AddPlayers;