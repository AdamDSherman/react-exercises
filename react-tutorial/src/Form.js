import React, { Component } from 'react';

class Form extends Component {

	handleChange = event => {
    const {name, value} = event.target;

    this.setState({
        [name] : value
    });
	}

	constructor(props) {
		super(props);

		this.initialState = {
			name: '',
			job: ''
		};

		this.state = this.initialState;

	}

	render(){
	  const { name, job } = this.state; 

	  return (
      <form>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={this.handleChange} />
        <label>Job</label>
        <input 
          type="text" 
          name="job" 
          value={job} 
          onChange={this.handleChange}/>
      </form>
	  )
	}
}

export default Form;
