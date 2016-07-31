var React = require('react');

var style = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px'
	}
}

var {container, content} = style;

var Loading = React.createClass({

	getInitialState() {
		this.originalText = this.props.text;
	    return {
	        text: this.originalText  
	    };
	},

	getDefaultProps() {
	    return {
	        text: "Loading",
	        speed: 300
	    };
	},

	propTypes: {
	    text: React.PropTypes.string,
	    speed: React.PropTypes.number
	},

	componentDidMount() {
	    var stopper = this.originalText + '...';

	    this.interval = setInterval( (() => {
	    	if (this.state.text === stopper) {
	    		this.setState({
	    			text: this.originalText
	    		})
	    	} else {
	    		this.setState({
	    			text: this.state.text + '.'
	    		})
	    	}
	    }).bind(this), this.props.speed)  
	},

	componentWillUnmount() {
	    clearInterval(this.interval)  
	},

	render: function() {
		return (
			<div style={container}>
				<p style={content}>{this.state.text}</p>
			</div>
		);
	}

});

module.exports = Loading;