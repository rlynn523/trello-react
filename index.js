var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            list: [],
        };
    },
    onAddInputChanged: function(text) {
        this.setState({
            text: text,
        })
    },
    addSubmit: function() {
        this.setState({
            list: this.state.list.concat(this.state.text),
        })
    },
    render: function() {
        return <List cards={this.state.list} callback={this.addSubmit} onchange={this.onAddInputChanged}/>
    }
});
var Card = function(props) {
    return (
        <div className='card'>
            <div className='card-text'>{props.text}</div>
        </div>
    );
};
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

module.exports = Trello;

ReactDOM.render(
<Board title='Board Title One'/>,
  document.getElementById('app')
);
