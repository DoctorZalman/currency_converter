import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Main from './pages/Main';
import store from './redux';

const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>
);

export default App;
