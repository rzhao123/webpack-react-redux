import React from 'react'

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <span>{ this.props.value }</span>
                <div>
                    <button onClick={this.props.onIncreaseClick}>Increase</button>
                    <button onClick={this.props.onDecreaseClick}>Decrease</button>
                </div>
            </div>
        )
    }
}
