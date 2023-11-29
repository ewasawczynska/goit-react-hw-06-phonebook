import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/AddContact");
export const deleteContact = createAction("contacts/DeleteContact");

export const setFilter = createAction("contacts/SetFilter");