import React, { Component } from 'react';

class Notes extends Component {
	render(){
		return (
		 <h2>
		 	This is Notes { this.props.username }
		 </h2>
		)
	}
}

export default Notes