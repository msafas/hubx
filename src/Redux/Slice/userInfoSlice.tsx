import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {

  token: string;
  AdiSoyadi: string;
  Firma: string;
  YETKI: string;
}

interface UserInfoState {
  data: UserInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserInfoState = {
  data: null,
  loading: false,
  error: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {

    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },

  },
});

export const {

  setUserInfo,

} = userInfoSlice.actions;

export default userInfoSlice.reducer;
