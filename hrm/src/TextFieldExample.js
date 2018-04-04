import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TextFieldExample extends React.Component {
	constructor() {
		super();
		this.state = {
			"nameTextField": "", // This is where the content for the TextField used below is stored 
		}
	}

	onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}

	render() {
		return (
			<div style={ {"marginLeft": "275px", "marginBottom": "10px"}}>
				<TextField 
					value={this.state.nameTextField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
				<div style={{"backgroundColor": "#FF80AB", "color": "#AD1457"}}>
					Logging
				</div>
				</Button>
			
				{this.state.nameTextField /*show the current nameTextField state here in the browser */} 
			</div>
		);
	}
}

export default TextFieldExample;
