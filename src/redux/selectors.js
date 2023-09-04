import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter;
export const selectContacts = state => state.contacts;
export const selectFilterContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, value) => {
    const normalizeValue = value.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeValue)
    );
  }
);
