import React, { Component } from 'react'
class Button extends React.Component {
    render() {
        const { onClick,children } = this.props
        return (
            <div className='btn' onClick={onClick}>
                {children}
            </div>
        )
    }
}

export default Button
