var React = require('react');

var ConfirmBattle = React.createClass({
    render() {
        return (
            this.props.isLoading === true
			? (<p> LOADING!!! </p>)
			: (<p> CONFIRM BATTLE! </p>)
        );
    }
});

module.exports = ConfirmBattle;