import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card.js';
//import CardList from './CardList';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import {robots} from './robots'

ReactDOM.render(
            <App />
                
, document.getElementById('root'));
registerServiceWorker();
