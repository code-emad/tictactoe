import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PlayerProvider} from './contexts/Player'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PlayerProvider>
        <App />
    </PlayerProvider>
);

