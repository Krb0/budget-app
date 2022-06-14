import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './user.model';
import { reducers } from './user.reducer';

const initialState: UserState = {
  data: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export const { saveUser, clearUser } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
