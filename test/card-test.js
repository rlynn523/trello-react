var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../card.js');

describe('Card component', function() {
    it('renders cards',  function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
        result.props.children.props.className.should.equal('card-text');
    });
});
