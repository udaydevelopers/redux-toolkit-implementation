// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if needed
    data: dataReducer,
  },
});

export default store;
