import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Rate, Button } from 'antd'
import './index.css'
const getRandom = Max => {
    var Min = 0
    var Range = Max - Min
    var Rand = Math.random()
    var num = Min + Math.round(Rand * Range)
    return num
}
const data = ['Amy', 'Louis.Bishka', 'Kristine', 'Emma', 'Lucas', 'Martin'].map((v,idx) => ({
    name: v,
    rate: getRandom(5)
}))
class App extends React.Component {
	render() {
		return (
			<div>
                <Card title={<Link to="/">Name Generator</Link>   } bordered={false} style={{ width: '100%' }}>
					<h3>Pick from following:</h3>
					<List
						style={{ margin: '30px 0' }}
						size="large"
						bordered
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<div className="list-item" onClick={() => alert('you picked  ' + item.name)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
									<span>{item.name}</span>
									<Rate value={item.rate} disabled />
								</div>
							</List.Item>
						)}
					/>
					<Button block size="large" type="primary">
						Reset
					</Button>
				</Card>
			</div>
		)
	}
}

export default App
