import letters from 'redux/modules/letters';
import member from 'redux/modules/member';
import { configureStore } from '@reduxjs/toolkit';
import auth  from 'redux/modules/auth';
import user from 'redux/modules/user';
const store = configureStore({
  reducer: {
    member,
    letters,
    auth,
    user,
  }
});

export default store;
