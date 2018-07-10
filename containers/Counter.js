import React from 'react'
import { connect } from 'react-redux'
import { INCREASE, DECREASE } from '../actions/counter'
import Counter from '../components/Counter'

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(INCREASE),
    onDecreaseClick: () => dispatch(DECREASE)
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
