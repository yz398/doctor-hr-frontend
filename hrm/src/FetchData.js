import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

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
	
	generateTableDataForLoop = () => {
		var prettyTableData = [];

		for (var i = 0; i < this.state.data.length; i++) {
			prettyTableData.push(
				<TableRow>
					<TableCell> {this.state.data[i]} </TableCell>
					<TableCell> {this.state.times[i]} </TableCell>
				</TableRow>
			);
		}

		return prettyTableData;

	}

	render() {
		var prettyTableData = this.generateTableDataForLoop();
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

				<Table>
					<TableHead>
						<TableRow>
							<TableCell> {this.props.heading[0]} </TableCell>
							<TableCell> {this.props.heading[1]} </TableCell>
						</TableRow>
					</TableHead>
					{/* time for some data */}
					{prettyTableData}	
				</Table>
			</div>		
		)
	}
}

export default FetchData;
