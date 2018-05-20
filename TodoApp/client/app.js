// Code Here

import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import Main from './components/Main.component';
import AddToDo from './components/AddTodo.component';
import TodoList from './components/TodoList.component'

import App from './components/MainScript';

import {Provider} from 'react-redux';
import store from './store';

var router = (<Provider store={store}>
                        <Router history={browserHistory}>
                            <Route path="/" component={App}>
                                <IndexRoute component={AddToDo}></IndexRoute>
                                <Route path="/todos" component={TodoList}></Route>
                            </Route>                           
                        </Router>
                        </Provider>
);

ReactDOM.render(router,document.getElementById('content'))
