import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

export const selectProfiles = state => state.contacts.contacts.items;
