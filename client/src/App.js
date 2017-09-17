import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom'
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
                <section>
                    <div className="container py-3">
                        <div className="card">
                            <div className="row ">
                                <div className="col-md-4">
                                    <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400"
                                         className="w-100"></img>
                                </div>
                                <div className="col-md-8 px-3">
                                    <div className="card-block px-3">
                                        <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <a href="#" className="btn btn-primary">Read More</a>
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
        <div >
            <div className="App">
                <header className="jumbotron my-4" style={{marginBottom: 5+'px', paddingBottom: 5+'px'}}>
                    <h1 className="display-3">TenniStats</h1>
                    <p className="lead">Find the statistics of your favorite tennis players. Just search any player and get its latest
                        games statistics. You will get the information of all the tennis tournaments in 2016!</p>
                </header>

                <SearchPlayer ></SearchPlayer>
                <br/>
                <div className="row text-center">
                    {this.state.users.map((user, i) =>
                        <AddPlayers key={i} name={user.name} url={user.url} points={user.points} age={user.age}/>
                    )}
                </div>
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

function searchPlayerServer() {
    fetch('/search/'+ this.state.value)
        .then(res => res.json())
        //.then(users => this.setState({users}))
        .then(SearchPlayer.changeSm())
    }

class SearchPlayer extends React.Component {
   state = {users: []}
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeSm(){
    console.log('d')
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    searchPlayerServer();
    event.preventDefault();
  }

  


  render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                <div className="col-md-10">
                    <input type="text" className="form-control"value={this.state.value} onChange={this.handleChange} placeholder="Type players name"/>
                </div>
                <div className="col-md-1">
                    <input type="submit" className="btn btn-primary" value="Search player" />
                </div>
                </div>
            </form>
        </div>
    );
  }
}

ReactDOM.render(
  <SearchPlayer />,
  document.getElementById('root')
);




export default App;