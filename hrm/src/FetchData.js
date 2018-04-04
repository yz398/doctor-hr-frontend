import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
	"dataStyle": {
		"marginTop": "10px",
		"marginBottom": "12px",
		"color": "#E91E63",
	}
}


class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": ["Nothing yet"],
			"times": ["Nothing yet"],
			"nameTextField": "",
		};
	}
	
	onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}

	getData = () => {
		axios.get("http://127.0.0.1:5000/api/heart_rate/"+this.state.nameTextField).then( (response) => {
			console.log(response);
			console.log(response.status);
			this.setState({"data": response.data.measurements});
			this.setState({"times": response.data.time});
		})	
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
				
				<div style={styles.dataStyle}>
				<Button variant="raised" onClick={this.getData}>
					Get Data
				</Button>
				</div>

				<div style={styles.dataStyle}>
					{this.state.data[0]}
					{this.state.times[0]}
				</div>
				<div style={styles.dataStyle}>
					{this.state.data[1]}
					{this.state.times[1]}
				</div>
				<div style={styles.dataStyle}>
					{this.state.data[2]}
					{this.state.times[2]}
				</div>
			</div>		
		)
	}
}

export default FetchData;
