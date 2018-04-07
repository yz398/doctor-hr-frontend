import React from 'react';
import Hello from './Hello.js';
import FetchData from './FetchData.js';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

var styles = {
	"appBarStyle": {
		"margin": "0px",
		"paddingLeft": "275px",
		"backgroundColor": "#C2185B"
	}
}

class App extends React.Component {
  // One thing every component must do: 
  // define the render method
  // (this defines the view of the component)
  render() {
    return (
      <div>
	    <AppBar position="static" style={styles.appBarStyle}>
			<Toolbar>
				<Typography variant="title" color="inherit">
					Heart rate 	
				</Typography>
			</Toolbar>
		</AppBar>
		<Hello color="maroon"/>		
		<FetchData heading={["HR", "Time"]} />
      </div>
    );
  }
}

export default App;
