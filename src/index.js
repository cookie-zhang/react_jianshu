import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style'
import App1 from './App';
const App = (
    <div>
        <App1 />
        <Globalstyle/>
    </div>
)

ReactDOM.render(App, document.getElementById('root'));
