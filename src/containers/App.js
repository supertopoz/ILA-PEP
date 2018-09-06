import React, { Component } from 'react';
import {connect} from "react-redux";

import { User } from "../components/User";
import { About } from "../components/About";
import { setName } from "../actions/userActions";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {

		render() {
			return (
		    <Router>

			<div>
			<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
			    <Route path="/about" 
			    	render={()=> {
			    	 return(
			    	 	<About changeUsername={() => this.props.setName("Anna")}/>
			    	 )
			    	}} 
			    />
				<User username={this.props.user.name}/>
			</div>
			</Router>
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
				setName: (name) => { dispatch(setName(name)) },
				
		};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);