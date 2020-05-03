import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login/Login';
// import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

// var fb2 = document.getElementById('fb2')
// var mp =document.getElementById('mp')

// fb2.onclick =function() {
//     fb2.style.display="flex"
// }

registerServiceWorker();