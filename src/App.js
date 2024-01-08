
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterComponent from './components/CounterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
        <ToDo/>
      </Provider>
    </div>
  );
}

export default App;
