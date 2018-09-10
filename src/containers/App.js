import React, { Component } from 'react';
import {connect} from "react-redux";

import { User } from "../components/User";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import  Header from "../components/Header/Header";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import { setName } from "../actions/userActions";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
		render() {
			return (
			<div>
			
			<Header/>
			<LoadingBar/>
            <Route path="/home" component={Home}></Route>
		    <Route path="/about" 
		    	render={()=> {
		    	 return(
		    	 	<About changeUsername={() => this.props.setName("Anna")}/>
		    	 )
		    	}} 
		    />
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
				setName: (name) => { dispatch(setName(name)) },				
		};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);