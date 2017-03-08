import React, { Component } from 'react';

class UserRepos extends Component {
	render(){
		return (
		 <h2>
		 	This is UserRepos of { this.props.username }
		 </h2>
		)
	}
}

export default UserRepos