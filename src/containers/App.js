import React, { Component } from 'react';
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";



class App extends React.Component {
		render() {
			return (
			<div>
			    <h1>Welcome to the chaos</h1>
				<Main changeUsername={() => this.props.setName("Anna")}/>
				<User username={this.props.user.name}/>
			</div>
			);
		}
}

		const mapStateToProps = (state) => {
			return {
				user: state.user,
				math: state.math
			};
		};

		const mapDispatchToProps = (dispatch) => {
			return {
				setName: (name) => {
				dispatch(setName(name));
			}
		};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);