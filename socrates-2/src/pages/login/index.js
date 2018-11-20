import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

class App extends React.Component {
	render() {
		return (
			<div style={{}}>
				<Link to="/">
					<h3 style={{ borderBottom: '1px solid #ddd', padding: '15px 25px' }}>ECON 101</h3>
				</Link>
				<Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: 25, marginTop: 200 }}>
					<h3>Welcome!</h3>
					<FormItem>
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
					</FormItem>
					<FormItem>
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					</FormItem>
					<FormItem>
						<Link to="/student">
							<Button type="primary" block className="login-form-button">
								Log in
							</Button>
						</Link>
					</FormItem>
				</Form>
			</div>
		)
	}
}

export default App
