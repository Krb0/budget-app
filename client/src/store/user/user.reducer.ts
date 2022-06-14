import { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.model';

export const reducers = {
  saveUser: (state: UserState, action: PayloadAction<any>) => {
    state.data = action.payload;
  },
  clearUser: (state: UserState) => {
    state.data = null;
    //state.data = action.payload;
  },
};
