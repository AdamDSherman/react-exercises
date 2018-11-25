import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokemonIndexList from './components/PokemonIndexList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0,
      loaded: false
    };

    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        let pages = Math.round(json.count / this.state.limit);

        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count,
          loaded: true
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err );
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(selectedPage) {
    let offset = this.state.limit * selectedPage;
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
    console.log(selectedPage);
     
  }

  handleLimitChange(event) {
    this.setState({
      limit: +event.target.innerHTML || this.state.count,
      activePage: 1
    }, () => {
      this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=0`);
    });
    console.log(this.state.limit);
  }

  render() {
    return (
      <div className="App">

        {this.state.loaded ? null : "Loading..." }
        <PokemonIndexList 
          display={this.state.loaded}
          options={[10,50,100,200]}
          selectedValue={this.state.limit}
          allValue={this.state.count}
          onOptionSelected={this.handleLimitChange}
          listOfPokemon={this.state.pokemon}
          bsSize="small"
          items={this.state.totalPages}
          activePage={this.state.activePage}
          onSelect={this.handlePaginationSelect}
          totalPages={this.state.totalPages}
        />

        {/* <SelectItemsPerPageButtons options={[10,50,100,200]} selectedValue={this.state.limit} allValue={this.state.count} onOptionSelected={this.handleLimitChange} />

        <Col sm={8} md={10} smOffset={2} mdOffset={1} >
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

        <Col sm={12}>
          <Pagination 
            bsSize="small"
            items={this.state.totalPages}
            activePage={this.state.activePage}
            onSelect={this.handlePaginationSelect}
          />
        </Col> */}
      </div>
    );
  }
}

export default App;
