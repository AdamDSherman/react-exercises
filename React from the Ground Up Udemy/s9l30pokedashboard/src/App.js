import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [
      ]
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  loadPokemon(url) {
    //fetch(`${this.props.baseUrl}/pokemon/1`)
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          pokemon: json.results
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err );
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
