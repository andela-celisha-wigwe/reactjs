import React from 'react';
import {transparentBg} from "../styles";
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
        	<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        		<h1>GitHub battle</h1>
        		<p className="lead">Some fancy motto</p>
        			<Link to="playerOne">
        				<button type='button' className="btn btn-lg btn-success">
        					Get Started
        				</button>
        			</Link>
        	</div>
        );
    }
}

module.exports = Home;