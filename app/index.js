'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/home';
import Search from './components/search';
import reducers from './reducers';

// Additional imports for webpack
import 'jquery';
import 'bootstrap';
import './styles/_index.scss';

const middleware = [logger, thunk];
const store = createStore(reducers, applyMiddleware(...middleware));

const Root = () => (
	<Provider store={store}>
		<Router>
			<div className="container">
				<Route exact path="/" component={Home} />
				<Route path="/test" component={Search} />
			</div>
		</Router>
	</Provider>
);

render(Root(), document.getElementById('root'));
