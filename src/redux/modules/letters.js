import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
// 리듀서
const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    setLetter: (state, action) => {
      return action.payload;
    },
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
      //이게 문제였다고.....?
      // return action.payload;
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    }
  }
});

export const { addLetter, deleteLetter, editLetter, setLetter } = lettersSlice.actions;
export default lettersSlice.reducer;
