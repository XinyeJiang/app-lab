import React from 'react'
import step1Img from './1.jpg'
import step2Img from './4.jpg'
import bg from './bg.jpg'
import getPearsonCorrelation from './getResult'
class Store extends React.Component {
	state = {
		step1: [''],
		step2: [''],
		result: ''
	}
	handleIpt(idx, e, type) {
		const arr = [...this.state[type]]
		arr.splice(idx, 1, e.target.value)
		this.setState({
			[type]: arr
		})
	}
	handleAdd(type) {
		const arr = [...this.state[type]]
		arr.push('')
		this.setState({ [type]: arr })
	}
	handleClear(type) {
		this.setState({ [type]: [''] })
	}
	handleResult = () => {
		const { step1, step2 } = this.state
		const result = getPearsonCorrelation(step1.map(v => +v), step2.map(v => +v))
		this.setState({ result: isNaN(result) ? 'NaN' : result })
	}
	render() {
		const { step1, step2, result } = this.state
		const stepStyle = {
			display: 'flex',
			flex: 1,
			padding: '30px 0'
		}
		const btnStyle = {
			cursor: 'pointer',
			background: 'white',
			border: '1px solid #1890ff',
			padding: '5px 10px',
			color: '#1890ff'
		}
		return (
		  <div style={{ width: '100%',height: '100vh', backgroundImage: 'url('+ bg +')',backgroundSize: 'cover' ,overflow: 'auto'}}>
                <div style={{ padding: 30, width: '95%',margin: '0 auto',opacity: 0.95}}>
                    <div
                        style={{
                            background: 'white',
                            display: 'flex',
                            padding: 20,
                            justifyContent: 'space-around',
                            boxShadow: '0 1px 3px rgba(26,26,26,.1)'
                        }}
                    >
                        <div style={{ ...stepStyle, borderRight: '1px solid #ddd',marginRight: 30 }}>
                            <img src={step1Img} style={{ border: '1px solid' }} height="500" alt="" />
                            <div style={{ padding: '0 30px' }}>
                                <h4>Number of Customers:</h4>
                                {step1.map((v, idx) => (
                                    <div key={idx}>
                                        <input
                                            type="number"
                                            min="0"
                                            value={v}
                                            style={{width: '100%'}}
                                            onChange={e => {
                                                this.handleIpt(idx, e, 'step1')
                                            }}
                                        />
                                    </div>
                                ))}
                                <br />
                                <button style={btnStyle} onClick={this.handleAdd.bind(this, 'step1')}>
                                    Add Variable
                                </button>{' '}
                                &nbsp;&nbsp;
                                <button style={{ ...btnStyle, color: '#f5222d', borderColor: '#f5222d' }} onClick={this.handleClear.bind(this, 'step1')}>
                                    Clear Variable
                                </button>
                            </div>
                        </div>

                        <div style={stepStyle}>
                            <img src={step2Img} style={{ border: '1px solid' }} height="500" alt="" />
                            <div style={{ padding: '0 30px' }}>
                                <h4>Number of Seasonal Drinks:</h4>
                                {step2.map((v, idx) => (
                                    <div key={idx}>
                                        <input
                                            type="number"
                                            min="0"
                                            value={v}
                                            style={{width: '100%'}}
                                            onChange={e => {
                                                this.handleIpt(idx, e, 'step2')
                                            }}
                                        />
                                    </div>
                                ))}
                                <br />
                                <button style={btnStyle} onClick={this.handleAdd.bind(this, 'step2')}>
                                    Add Variable
                                </button>{' '}
                                &nbsp;&nbsp;
                                <button style={{ ...btnStyle, color: '#f5222d', borderColor: '#f5222d' }} onClick={this.handleClear.bind(this, 'step2')}>
                                    Clear Variable
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="footer"
                        style={{
                            background: 'white',
                            marginTop: 20,
                            padding: 50,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 1px 3px rgba(26,26,26,.1)',
                            height: 100
                        }}
                    >
                        <button style={btnStyle} onClick={this.handleResult}>
                            Calculate
                        </button>
                        <h3>{result}</h3>
                    </div>
                </div>
			</div>
		)
	}
}
export default Store
