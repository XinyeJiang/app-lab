import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Story from './pages/Story'

const routes = [
	{
		path: '/',
		component: Login
	},
	{
		path: '/story',
		component: Story
	}
]

class App extends React.Component {

	render() {
		return <Router>
				<div>
					{routes.map((v, idx) => <Route key={idx} path={v.path} component={v.component} exact />)}
				</div>
			</Router>
	}
}

export default App
