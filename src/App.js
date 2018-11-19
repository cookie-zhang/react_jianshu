import React, { Component } from 'react';
import Header from './common/header';
import { Provider  } from 'react-redux';  //记住是大写 Provider
import store from '../src/store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <BrowserRouter>
          <div>
          <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider >
    );
  }
}
export default App;
