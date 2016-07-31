var React = require('react');
import {transparentBg, space} from "../styles";
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import {Link} from 'react-router';
import MainContainer from '../components/MainContainer';
import Loading from "../components/Loading";


function StartOver() {
	return (
		<div className="col-sm-8 col-sm-offset-2">
			<Link to="/playerOne">
				<button type="button" className="btnbt-lg btn-danger">
					Start Over
				</button>
			</Link>
		</div>
	)
}

var Results = React.createClass({

	render: function() {

		if (this.props.isLoading === true) {
			return (
				<Loading text="Waiting" speed={70} />
			)
		}

		

		if (this.props.scores[0] === this.props.scores[1]) {
			return (
				<MainContainer>
					<h1>It is a tie!!!</h1>
					<StartOver />
				</MainContainer>
			)
		}
		var winningIndex = this.props.scores[0] > this.props.scores[1] ? 0 : 1;
		var losingIndex = winningIndex === 0 ? 1 : 0;

		return (
			<MainContainer>
				<h1>Results</h1>
				<div className="col-sm-8 col-sm-offset-2">
					<UserDetailsWrapper header="Winner">
						<UserDetails score={this.props.scores[winningIndex]} info={this.props.playersInfo[winningIndex]} />
					</UserDetailsWrapper>
					<UserDetailsWrapper header="Loser">
						<UserDetails score={this.props.scores[losingIndex]} info={this.props.playersInfo[losingIndex]} />
					</UserDetailsWrapper>
				</div>

				<div className="col-sm-12" style={space}>
					<StartOver />
				</div>
			</MainContainer>
		);
	},

	propTypes: {
	    isLoading: React.PropTypes.bool.isRequired,
	    playersInfo: React.PropTypes.array.isRequired,
	    scores: React.PropTypes.array.isRequired,
	},

});

module.exports = Results;