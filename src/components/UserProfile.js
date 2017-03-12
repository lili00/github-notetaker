import React, { Component, PropTypes } from 'react';

class UserProfile extends Component {
	render(){
		
		const { username, info } = this.props
		let { avatar_url, name, email, followers, following, public_repos, created_at, location } = info
		// console.log(info)
		return (
			<div>
				<h2> User Profile </h2>
				<ul>
					{ avatar_url && <li className="list-group-item">
						<img src={avatar_url} className="img-rounded img-responsive" alt="photo" />
					</li>}
					{ name && <li className="list-group-item">Name: { name }</li> }
					{ email &&<li className="list-group-item">Email: { email }</li> }
					<li className="list-group-item">Followers: { followers }</li>
					<li className="list-group-item">Following: { following }</li>
					<li className="list-group-item">Public repos: { public_repos } </li>
					<li className="list-group-item">Location: { location }</li>
					<li className="list-group-item">Created at: { created_at  }</li>
				</ul>
			</div>

		 
		)
	}
}

UserProfile.propTypes = {
	username: PropTypes.string.isRequired,
	info: PropTypes.object
}

export default UserProfile