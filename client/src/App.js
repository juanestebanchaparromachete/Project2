import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/players')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <div className="row text-center">
                    {this.state.users.map((user,i) =>
                        <AddPlayers key={i} name={user.name} url={user.url} points={user.points} age={user.age}/>
                    )}
                </div>
            </div>
        );
    }
}


class AddPlayers extends React.Component{
    render() {
        return <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img className="card-img-top" src={this.props.url} alt="Profile pic"></img>
            <div className="card-body">
              <h4 className="card-title">{this.props.name}</h4>
              <p className="card-text">Current player points: {this.props.points} <br/> Player age: {this.props.age}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Find Out More!</button>
            </div>
          </div>
        </div>;
    }
}

export default App;