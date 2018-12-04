import React, { Component } from 'react'
import { Form,Button, Select, InputNumber } from 'antd'
import exchanges from './exchanges.js'
const FormItem = Form.Item
const Option = Select.Option
const renderOptions = () => {
	return exchanges.map(v => (
		<Option value={v} key={v}>
			{v}
		</Option>
	))
}
class Calc extends Component {
	state = {
		amount: 0,
		from: 'USD',
		to: 'CNY',
		rate: 0
	}
	handleSubmit = () => {
        const {from,to} = this.state
        this.setState({
            rate: 0
        })
        fetch(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[to]
            this.setState({rate})
        })
    }
	onNumChange = v => {
		this.setState({
			amount: v
		})
	}
	onFromChange = v => {
		this.setState({
			from: v
		})
	}
	onToChange = v => {
		this.setState({
			to: v
		})
	}
	render() {
		const { from, to, amount, rate } = this.state
		return (
			<Form>
				<FormItem>
					<InputNumber min={0} value={amount} onChange={this.onNumChange} />
				</FormItem>
				<FormItem>
					<Select value={from} onChange={this.onFromChange}>
						{renderOptions()}
					</Select>
				</FormItem>
				<FormItem>
					<Select value={to} onChange={this.onToChange}>
						{renderOptions()}
					</Select>
				</FormItem>
				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						Calculate
					</Button>
				</FormItem>
				<FormItem>
					{rate ? (
						<span style={{ color: '#f5222d' }}>
							{amount} {from} = {amount * rate} {to}
						</span>
					) : null}
				</FormItem>
			</Form>
		)
	}
}

export default Calc
