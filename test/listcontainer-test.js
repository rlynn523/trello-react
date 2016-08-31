var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListContainer = require('../listcontainer.js');
describe('List container', function() {
    it('stores list of cards',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer />);
        var result = renderer.getRenderOutput();
        result.props.cards.should.deep.equal([]);
    });
});
