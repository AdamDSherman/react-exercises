import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputJSX: '/* Write some awesome JSX */',
			outputjS: '',
			error: 'Error here'
		}
		this.transformJSX = this.transformJSX.bind(this);
	}

	transformJSX(event) {
		// Save input to code var
		let code = event.target.value;
		//console.log(code);
		// Try catch block:
		try {
			this.setState({
				outputjS: Babel.transform(code, { presets: ['es2015', 'react'] }).code,
				error: ''
			})
		}
		catch(error) {
			this.setState({
				error: error.message
			})
		}

	}

	render() {
		return (
			<div>
				<div className="container">
					<textarea id="output" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
					<div id="input">{this.state.outputjS}</div>
				</div>
				<footer>{this.state.error}</footer>
			</div>
		)
	}
}

