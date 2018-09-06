import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  AuthorQuiz from './AuthorQuiz.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));
registerServiceWorker();
