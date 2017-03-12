import React, { Component, PropTypes } from 'react';

class UserRepos extends Component {
	render(){
		let { username, repos } = this.props
		console.log(repos)
		return (
		 	<div>
				<h2> { this.props.username } Git Repos </h2>
				<ul className="list-group">
					{
						repos.map((repo, index) => {
							return (
								<li className="list-group-item" key={index}>
									<h4><a href={repo.html_url}>{repo.name}</a></h4>
									<p>{repo.description}</p>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

UserRepos.propTypes = {
	username: PropTypes.string.isRequired,
	repos: PropTypes.array.isRequired
}

export default UserRepos