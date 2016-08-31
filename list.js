var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card.js');

var List = React.createClass({
    onAddSubmit: function(e) {
        e.preventDefault();
        this.props.callback();
        e.target.value = '';
    },
    onChange: function(e) {
        e.preventDefault();
        this.props.onchange(e.target.value);
    },
    render: function(props) {
        var listCards = [];
        var propsCards = this.props.cards;
        for (var i=0; i<propsCards.length; i++) {
            listCards.push(<Card key={i} text={propsCards[i]} />)
        }
        return (
            <div className='cardList'>
                <div className='list-title'>{this.props.title}</div>
                <div className='list-cards'>{listCards}</div>
                <form onSubmit={this.onAddSubmit}>
                    <input type='text' onChange={this.onChange}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
});

module.exports = List;
