import React, { Component } from 'react'
import { Form, Button, Select, DatePicker } from 'antd'
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
class History extends Component {
	state = {
		date: 0,
		from: 'USD',
		to: 'CNY',
		result: ''
	}
	handleSubmit = () => {
		const { date, from, to } = this.state
		this.setState({
			result: ''
		})
        fetch(`https://api.exchangeratesapi.io/${date}?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(data => {
            const result = data.rates[to]
            const resultDate = data.date
            this.setState({result: `${from}/${to}  (${resultDate})  : ${result}`})
        })
	}
	onChange = (date, dateStr) => {
		this.setState({
			date: dateStr
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
		const { from, to, result } = this.state
		return (
			<Form>
				<FormItem>
					<DatePicker onChange={this.onChange} />
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
						Submit
					</Button>
				</FormItem>
				<FormItem>{result ? <span style={{ color: '#f5222d' }}>{result}</span> : null}</FormItem>
			</Form>
		)
	}
}

export default History
