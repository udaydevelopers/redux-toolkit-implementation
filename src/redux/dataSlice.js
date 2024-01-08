// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Api from '../components/Api';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const data = await Api.getData();
    return data;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
