var React = require('react');
import {PropTypes} from 'react';
import {transparentBg, space} from '../styles';
import {Link} from 'react-router';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainContainer from '../components/MainContainer';
import Loading from "../components/Loading"


function puke(object) {
	return <pre>
		{JSON.stringify(object, null, ' ')}
	</pre>
}

function ConfirmBattle(props) {
	return (
        props.isLoading === true
		? <Loading text="One moment" speed={800} />
		: <MainContainer>
	        <h1>Confirm Players</h1>
	        <div className='col-sm-8 col-sm-offset-2'>
	        	<UserDetailsWrapper header='Player 1'>
				    <UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Player 2'>
				    <UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
	        </div>
	         <div className='col-sm-8 col-sm-offset-2'>
	          <div className='col-sm-12' style={space}>
	            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
	          </div>
	          <div className='col-sm-12' style={space}>
	            <Link to='/playerOne'>
	              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
	            </Link>
	          </div>
	        </div>
		  </MainContainer>
    );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;