import React from 'react';

class Main extends React.Component {
    render() {
        return (
        	<div className='main-component'>
                {this.props.children}
        	</div>
        );
    }
}

module.exports = Main;