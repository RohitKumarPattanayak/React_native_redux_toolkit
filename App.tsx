import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import CounterScreen from './src/components/CounterScreen';
import TraccarDesign from './src/components/TraccarDesign';

const App = () => {
  return (
    <Provider store={store}>
      <TraccarDesign />
    </Provider>
  );
};

export default App;
