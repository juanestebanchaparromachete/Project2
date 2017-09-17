import React from 'react'
import '../App.css';
import '../CSS/Table.css';

class PlayerStatsView extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/players/' + this.props.params.name.split(' ')[1] + ' ' + this.props.params.name.split(' ')[0].charAt(0) + '.' + '/Results')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (

      <div className="App">
        <section id="playerCardSection">
          <div className="container py-3">
            <div className="card">
              <div className="row ">
                <div className="col-md-4">
                  <img style={{maxWidth: 300}}
                       src={this.props.location.query.url}
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
        {/*TABLE*/}
        <table className="table-fill">
          <thead>
          <tr>
            <th className="text-left">Tournament</th>
            <th className="text-left">Series</th>
            <th className="text-left">Round</th>
            <th className="text-left">Surface</th>
            <th className="text-left">VS</th>
            <th className="text-left">Score</th>
          </tr>
          </thead>
          <tbody className="table-hover">
          {this.state.users.map((user, i) =>
            <tr>
              <td className="text-left">{user.Tournament}</td>
              <td className="text-left">{user.Series}</td>
              <td className="text-left">{user.Round}</td>
              <td className="text-left">{user.Surface}</td>
              {(() => {
                if (user.Winner === this.props.params.name.split(' ')[1]+' '+this.props.params.name.split(' ')[0].charAt(0)+'.')
                  return <td className="text-left">{user.Loser}</td>
                else
                  return <td className="text-left">{user.Winner}</td>
              })()}
              {(() => {
                var score ='';
                // if (user.Winner === this.props.params.name.split(' ')[1] + ' ' + this.props.params.name.split(' ')[0].charAt(0) + '.') {
                  //Player Lost
                  if (user.W1)
                    score += user.W1 + '-' + user.L1 + ' ';
                  if (user.W2)
                    score += user.W2 + '-' + user.L2 + ' ';
                  if (user.W3)
                    score += user.W3 + '-' + user.L3 + ' ';
                  if (user.W4)
                    score += user.W4 + '-' + user.L4 + ' ';
                  if (user.W5)
                    score += user.W5 + '-' + user.L5;
                // }
                return <td className="text-left">{score}</td>
              })()}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerStatsView;