import { createSelector } from '@reduxjs/toolkit';
import { filtersValue } from '../filters/selectors';

export const selectProfiles = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectProfiles, filtersValue],
  (profiles, filter) => {
    return profiles.filter(profile =>
      profile.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
