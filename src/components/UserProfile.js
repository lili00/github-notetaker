import React, { Component } from 'react';

class UserProfile extends Component {
	render(){
		return (
		 <h2>
		 	This is UserProfile { this.props.username }
		 </h2>
		)
	}
}

export default UserProfile