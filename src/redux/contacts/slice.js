import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import { logoutThunk } from '../auth/operations';
import toast from 'react-hot-toast';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success('Contact added');
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        toast.error('Contact deleted');
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.items = [];
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const updateElem = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (updateElem !== -1) {
          state.items[updateElem] = action.payload;
        }
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export default slice.reducer;
