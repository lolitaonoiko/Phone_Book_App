import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;

export const filtersValue = state => state.filters.filters.name;
