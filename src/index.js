import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { sendMessage, listenMessage } from './socket_io_client';

listenMessage('room', (data)=> { console.log(data) });

sendMessage('room', { id : (new Date()), message: 'Hello' });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
