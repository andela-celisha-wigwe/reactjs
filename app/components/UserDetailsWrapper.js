var React = require('react');
var PropTypes = React.PropTypes;

var UserDetailsWrapper = React.createClass({

	propTypes: {
		header: PropTypes.string.isRequired,
	},

	render: function() {
		return (
			<div className="col-sm-6">
        		<p className="lead"> {this.props.header}</p>
        		{this.props.children}
        	</div>
		);
	}

});

module.exports = UserDetailsWrapper;

