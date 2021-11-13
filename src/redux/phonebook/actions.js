//Using redux-toolkit
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add");
export const removeContact = createAction("contact/delete");
export const filterValue = createAction("filter/value");

//using vanilla redux
// export const addContact = (contact) => ({
//   type: "contact/add",
//   payload: contact,
// });

// export const removeContact = (id) => ({
//   type: "contact/remove",
//   payload: { id },
// });

// export const filterValue = (value) => ({
//   type: "filter/value",
//   payload: value,
// })
