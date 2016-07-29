import React from 'react';
import ConfirmBattle from "../components/ConfirmBattle";

var ConfirmBattleContainer = React.createClass({
    contextTypes: function() {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
	    return {
	    	isLoading: false,
	    	playersInfo: []
	    };
	},

	componentWillMount: function () {
		var {query} = this.props.location;
	},

    componentDidMount: function () {
		var {query} = this.props.location;
	},

    render: function() {
        return (
        	<ConfirmBattle
        	isLoading={this.state.isLoading}
        	playersInfo={this.state.playersInfo}
        	/>
        );
    }
});

module.exports = ConfirmBattleContainer;
