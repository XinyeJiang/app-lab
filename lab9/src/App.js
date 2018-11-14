import React, { Component } from 'react'
import Button from './Button'
import img from './pic.jpg'

class App extends React.Component {
	state = {
		count: 0
	}
	increment = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	decrement = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	render() {
		const { count } = this.state

		return (
			<div className="app">
				<div className="container">
					<img src={img} alt="" width="300" height="300" position="center"/>
					<div className="wrapper">
						<h1 className="count">{count}</h1>
						<div>
							<Button onClick={this.increment}>Plus</Button>
							<Button onClick={this.decrement}>Minus</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
