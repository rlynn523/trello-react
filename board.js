var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./listcontainer.js');

var Board = function(props) {
    var listTitles = [];
    for (var i=0; i<1; i++) {
        listTitles.push(<ListContainer key={i} />)
    }
    return (
        <div className='board'>
            <div className='board-title'>{props.title}</div>
            <div className='board-lists'>{listTitles}</div>
        </div>
    )
}

module.exports = Board;
