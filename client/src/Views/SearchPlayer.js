import React from 'react'
import '../App.css';
import '../PlayerStats.css';
import ReactDOM from 'react-dom'
import axios from 'axios';


class SearchPlayer extends React.Component {
  state2 = {users: []}

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.players = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeSm() {
    console.log('d')
  }

  setPlayers(players) {
    this.players = players
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    var upperClass = this;
    axios.get('/search/' + this.state.value)
      .then(function (response) {
        upperClass.setPlayers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              <input type="text" className="form-control" value={this.state.value}
                     onChange={this.handleChange} placeholder="Type players name"/>
            </div>
            <div className="col-md-1">
              <input type="submit" className="btn btn-primary" value="Search player"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


ReactDOM.render(
  <SearchPlayer/>,
  document.getElementById('root')
);


export default SearchPlayer;