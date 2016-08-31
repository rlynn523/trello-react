var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list.js')

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
module.exports = ListContainer;
