const Game = require('./game.jsx').default;
const ReactDOM = require('react-dom/client');
const React = require('react');

function initApplication() {
    const root = ReactDOM.createRoot(document.getElementById('game'));
    root.render(React.createElement(Game, {rows:8, columns:10}));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApplication();
    }); 
} else if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApplication();
}