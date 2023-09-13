//Since we want to access user details from different components, we will create a global state user

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,         //An object {} containing user with null value
  },

  //Defining an object{} in reducers which has a bunch of methods used in updation of state
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    //state just keeps track of what our current state holds
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
