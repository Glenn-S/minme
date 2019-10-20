import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { CookiesProvider } from 'react-cookie';
// import reducers from './reducers';
// import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);