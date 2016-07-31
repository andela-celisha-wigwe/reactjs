var React = require('react');
import {space, transparentBg} from "../styles"; 

var MainContainer = React.createClass({

	render: function() {
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = MainContainer;