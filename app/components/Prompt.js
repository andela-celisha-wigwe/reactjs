import React from 'react';
import {PropTypes} from 'react';
import {transparentBg} from "../styles";

function Prompt (props) {
	return (
    	<div style={transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            <h1>{props.header}</h1>

            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                        type="text"
                        name=""
                        onChange={props.onUpdateUser}
                        value={props.username}
                        className="form-control"
                        placeholder="GitHub Username" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                        className="btn btn-block btn-success"
                        type="submit">
                            Contnue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

export default Prompt;
