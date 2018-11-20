import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap/lib/';

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
        <Col sm={8} md={10} smOffset={2} mdOffset={1} >
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>
      </div>
    );
  }
}

export default App;
