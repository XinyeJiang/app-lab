import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'antd'

class App extends React.Component {
	render() {
		return (
			<div style={{ padding: 30, paddingTop: 300 }}>
				<Link to="/prof">
					<Button size="large" type="primary" block>
						Professor
					</Button>
				</Link>
				<br />
				<br />
                <Link to="/login">
                    <Button size="large" block>
                        Student
				    </Button>
                </Link>
			</div>
		)
	}
}

export default App
