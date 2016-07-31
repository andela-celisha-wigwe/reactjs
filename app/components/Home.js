import React from 'react';
import {Link} from 'react-router';
import MainContainer from '../components/MainContainer';

class Home extends React.Component {
    render() {
        return (
        	<MainContainer>
        		<h1>GitHub battle</h1>
        		<p className="lead">Some fancy motto</p>
        			<Link to="playerOne">
        				<button type='button' className="btn btn-lg btn-success">
        					Get Started
        				</button>
        			</Link>
        	</MainContainer>
        );
    }
}

module.exports = Home;