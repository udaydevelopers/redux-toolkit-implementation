
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterComponent from './components/CounterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </div>
  );
}

export default App;
