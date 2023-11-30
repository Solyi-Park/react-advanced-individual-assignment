const { createSlice } = require('@reduxjs/toolkit');

const memberSlice = createSlice({
  name: 'member',
  initialState: '카리나',
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    }
  }
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;

