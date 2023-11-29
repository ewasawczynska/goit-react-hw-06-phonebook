import { createAction } from "@reduxjs/toolkit";

// CONTACTS

export const addContact = createAction("contacts/AddContact");
export const deleteContact = createAction("contacts/DeleteContact");

// FILTER

export const setFilter = createAction("contacts/SetFilter");