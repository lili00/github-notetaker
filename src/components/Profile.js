import React, { Component } from 'react';

import Notes from './Notes.js'
import UserProfile from './UserProfile.js'
import UserRepos from './UserRepos.js'

class Profile extends Component {
	render(){
		const { username } = this.props.params
		console.log( username );
		return (
		 <div className="row">
		 	<div className="col-sm-4">
		 		<UserProfile  username={username}/>
		 	</div>
		 	<div className="col-sm-4">
		 		<UserRepos username={username}/>
		 	</div>
		 	<div className="col-sm-4">
		 		<Notes username={username}/>
		 	</div>
		 </div>
		)
	}
}

export default Profile