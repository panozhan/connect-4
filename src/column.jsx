import React from 'react';
class Column extends React.Component {
    constructor(props) {
        super(props);
        this.columnId = props.columnId;
    }

    handleClicked() {
        console.log('column clicked ' + this.columnId);
    }

    handleMouseEnter() {
        console.log('on mouse entered column ' + this.columnId);
    }

    render() {
        return <div className={`column-${this.columnId}`} 
                onClick={this.handleClicked.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
        </div>;
    }
}

export default Column; 