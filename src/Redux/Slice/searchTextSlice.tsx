import { createSlice } from '@reduxjs/toolkit';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: '',
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchText: (state) => {
      state.searchText = '';
    },
  },
});

export const { setSearchText, clearSearchText } = searchTextSlice.actions;

export default searchTextSlice.reducer;
