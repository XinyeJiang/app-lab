import React, { Component } from 'react'
import { Card, List, Rate ,Button} from 'antd'
import { Link } from 'react-router-dom'
const data = ['TopicA', 'TopicB', 'TopicC', 'TopicD', 'TopicE', 'TopicF']
class App extends React.Component {
	render() {
		return (
			<div>
                <Card title={<Link to="/">ECON 101</Link>}  bordered={false} style={{ width: '100%' }}>
					<h3 >Today's Class</h3>
					<List
                        style={{ margin: '30px 0' }}
						size="large"
						bordered
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',width: '100%' }}>
									<span>{item}</span>
									<Rate />
								</div>
							</List.Item>
						)}
					/>
                    <Button block size="large" type="primary">Submit</Button>
				</Card>
			</div>
		)
	}
}

export default App
