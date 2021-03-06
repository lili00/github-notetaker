import React, { Component } from 'react';

import Notes from './Notes.js'
import UserProfile from './UserProfile.js'
import UserRepos from './UserRepos.js'

import getGithubInfo from '../utils/getGithubInfo.js'

class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			info: { },
			repos: [ ],
			notes:[]
		}
	}
	componentWillReceiveProps(nextProps){
		this.update(nextProps.params.username)
	}
	componentDidMount(){
		// const { username } = this.props.params
		this.update(this.props.params.username)
	}
	update( username ){
		getGithubInfo( username )
		 .then( data => {
		 	this.setState({
		 		info: data.userInfo,
		 		repos: data.userRepos
		 	})
		 })
	}
	render(){
		const { username } = this.props.params
		// console.log( username );

		
		return (
		 <div className="row">
		 	<div className="col-sm-4">
		 		<UserProfile  
		 			username={ username }
		 			info={ this.state.info }
		 		/>
		 	</div>
		 	<div className="col-sm-4">
		 		<UserRepos 
		 			username={ username }
		 			repos={ this.state.repos }
		 		/>
		 	</div>
		 	<div className="col-sm-4">
		 		<Notes 
		 			username={username}
		 			notes={ this.state.notes }
		 		/>
		 	</div>
		 </div>
		)
	}
}

export default Profile