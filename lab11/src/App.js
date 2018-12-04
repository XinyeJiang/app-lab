import React, { Component } from 'react'
import './App.css'
import { Card } from 'antd'
import History from './History'
import Calculation from './Calculate'

const tabList = [
	{
		key: 'tab1',
		tab: 'Calculation'
	},
	{
		key: 'tab2',
		tab: 'History'
	}
]

const contentList = {
	tab1: <Calculation></Calculation>,
	tab2: <History></History>
}
class App extends Component {
	state = {
		key: 'tab1'
	}
	onTabChange = key => {
		this.setState({ key })
	}

	render() {
		return (
			<div className="App">
				<div className="card-wrapper">
					<Card
						style={{ width: '100%' }}
						title="Exchange Rates"
						tabList={tabList}
						activeTabKey={this.state.key}
						onTabChange={key => {
							this.onTabChange(key)
						}}
					>
						{contentList[this.state.key]}
					</Card>
				</div>
			</div>
		)
	}
}

export default App
