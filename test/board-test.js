var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../board.js')

describe('Board component', function() {
    it('renders board',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
        result.props.children[0].props.className.should.equal('board-title');
        result.props.children[1].props.className.should.equal('board-lists');
    });
});
