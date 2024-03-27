import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doLogin } from './loginAPI';

const initialState = {
  logged: false,
  token: ""
};
// ASYNC

export const loginAsync = createAsyncThunk(
  'login/doLogin',
  async (cred) => {
    // console.log(cred)
    const response = await doLogin(cred);
    return response.data;
  }
);


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        // state.products = action.payload
        console.log(action.payload.access)
        state.logged= true
        state.token=action.payload.access
      })
  },
});

export const { increment,increment3,reduce2 } = loginSlice.actions;
export const selectlogged = (state) => state.login.logged;
export const selectTocken = (state) => state.login.tocken;
export default loginSlice.reducer;