//using vanilla redux
import { combineReducers } from "redux";

//using redux-toolkit
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, filterValue } from "./actions";

const initState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

//using redux-toolkit
export const contactsList = createReducer(initState, {
  [addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

export const contactsFilter = createReducer("", {
  [filterValue]: (_, { payload }) => payload,
});

//using vanilla redux
// const contactsList = (state = initState, action) => {
//   switch (action.type) {
//     case "contact/add":
//       return [...state, action.payload];
//     case "contact/remove":
//       return state.filter((contact) => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const contactsFilter = (state = "", action) => {
//   return state;
// };

// export const contactsReducer = combineReducers({
//   contacts: contactsList,
//   filter: contactsFilter,
// });
