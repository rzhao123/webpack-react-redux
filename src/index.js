import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from '../reducers/reducer'
// import App from '../components/App'
// let store = createStore(todoApp)
import counter from '../reducers/counter'
import App from '../components/App'
const store = createStore(counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
