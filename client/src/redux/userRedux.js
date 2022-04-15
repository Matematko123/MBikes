import { createSlice } from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearState: (state, action) => {
      state.currentUser = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, clearState } =
  userSlice.actions;
export default userSlice.reducer;
