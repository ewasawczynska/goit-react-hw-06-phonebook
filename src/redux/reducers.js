import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

// CONTACTS

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
      state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }
  });

  // FILTER

  const filtersInitialState = [];

  export const filtersReducer = createReducer(filtersInitialState, {
    [setFilter]: (state, action) => {
      state.status = action.payload;
    },
  });
