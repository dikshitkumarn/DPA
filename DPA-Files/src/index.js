import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login/Login';
// import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

registerServiceWorker();