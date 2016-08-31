var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className='card'>
            <div className='card-text'>{props.text}</div>
        </div>
    );
};

module.exports = Card;
