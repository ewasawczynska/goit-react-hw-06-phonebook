import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

// CONTACTS

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
      state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
      return state.filter(contact => contact.id !== action.payload)
    }
  });

  // FILTER

  const filtersInitialState = '';

  export const filtersReducer = createReducer(filtersInitialState, {
    [setFilter]: (state, action) => {
      return action.payload;
    },
  });
