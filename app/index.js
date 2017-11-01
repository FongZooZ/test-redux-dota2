'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './containers/home';
import reducers from './reducers';

// Additional imports for webpack
import 'jquery';
import 'bootstrap';
import './styles/_index.scss';

// const history = createHistory();
const middleware = [logger, thunk];
// middleware.push(routerMiddleware(history));

const store = createStore(reducers, applyMiddleware(...middleware));

const ConnectedHome = connect(mapStateToProps)(Home);

const mapStateToProps = (state) => {
	return {
		heroes: state.heroes,
		countriesRank: state.countriesRank
	};
};

const Root = () => (
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={ConnectedHome} />
		</Router>
	</Provider>
);

render(Root(), document.getElementById('root'));
