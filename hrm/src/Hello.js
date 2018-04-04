import React from 'react';

const default_color = "green";

class Hello extends React.Component {
	render() {
		
		var color = this.props.color;
		if (color === undefined) {
			color = default_color;
		}

		return (
		<div style={ {'color': color, "marginLeft": "275px","marginBottom": "20px",
						"marginTop": "10px"} }>
			Welcome to heart rate control
		</div>
		);
	}
}

export default Hello;
