import React from 'react';
import Column from './column.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="game-wrapper">
            <div id="board">
                <Column columnId={1}></Column>
                <Column columnId={2}></Column>
                <Column columnId={3}></Column>
            </div>
            
        </div>
    }
}

export default Game;