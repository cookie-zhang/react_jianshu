import React, { Component } from 'react';
import Header from './common/header';
import { Provider  } from 'react-redux';  //记住是大写 Provider
import store from '../src/store/index.js'
class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <Header></Header>
      </Provider >
    );
  }
}
export default App;
