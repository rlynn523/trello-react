var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../list.js');

describe('List component', function() {
    it('renders lists',  function() {
        var cards = ['hello', 'hi'];

        var renderer = TestUtils.createRenderer();
        renderer.render(<List cards={cards}/>);
        var result = renderer.getRenderOutput();
        console.log(result.props.children[0]..getDOMNode().innerHTML);
        result.props.className.should.equal('cardList');
        result.props.children[0].props.className.should.equal('list-title');
        result.props.children[0].getDOMNode().innerHTML.should.equal('hello');
        result.props.children[1].props.className.should.equal('list-cards');
    });
});
