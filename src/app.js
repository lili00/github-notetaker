import React, { Component } from 'react';
import { render } from 'react-dom'
import Main from  './containers/Main'
import Router from './routes/routers';

class App extends Component {
	
	render(){
		return (
			<Router />
			
		)
	}
}
render(<App />, document.getElementById('app'))