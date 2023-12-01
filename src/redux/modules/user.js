const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  accessToken: '',
  userId: '',
  avatar: null,
  nickname: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      // console.log('action', action);
      const { accessToken, userId, avatar, nickname } = action.payload;
      state.accessToken = accessToken;
      state.userId = userId;
      state.avatar = avatar;
      state.nickname = nickname;
    }
  }
});

export const { loggedInUser } = userSlice.actions;
export default userSlice.reducer;
