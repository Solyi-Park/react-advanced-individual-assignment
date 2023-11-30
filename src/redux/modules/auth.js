const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoggedIn: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.isLoggedIn = true;
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;