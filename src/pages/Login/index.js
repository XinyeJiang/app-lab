import React from 'react'
import bg from './bg.jpg'
class Login extends React.Component {
	state = {
		username: '',
		password: ''
	}
	handleInput(type, e) {
		this.setState({
			[type]: e.target.value
		})
	}
	handleLogin = () => {
		this.props.history.push({
			pathname: './story'
		})
	}
	render() {
		const btnStyle = {
			cursor: 'pointer',
			background: 'white',
			border: '1px solid #1890ff',
			padding: '10px 10px',
			color: '#1890ff',
			width: '100%'
		}
		return (
			<div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' ,backgroundImage: 'url('+ bg +')',backgroundSize: 'cover' }}>
				<div style={{ background: 'white', padding: 30, boxShadow: '0 1px 3px rgba(26,26,26,.1)',opacity: 0.9 }}>
					username:&nbsp;&nbsp; <input style={{height: 30,outline: 'none',border: '1px solid #ddd'}} type="text" onChange={this.handleInput.bind(this, 'username')} /> <br />
					<br />
					password:&nbsp;&nbsp; <input style={{height: 30,outline: 'none',border: '1px solid #ddd'}} type="password" onChange={this.handleInput.bind(this, 'password')} /> <br />
					<br />
					<button style={btnStyle} onClick={this.handleLogin}>
						Login
					</button>
				</div>
			</div>
		)
	}
}
export default Login
