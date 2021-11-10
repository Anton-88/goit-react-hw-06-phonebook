import { combineReducers } from "redux";

const initState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsList = (state = initState, action) => {
  switch (action.type) {
    case "contact/add":
      // console.log(`action`, action)
      return [...state, action.payload];
    case "contact/remove":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const contactsFilter = (state = "", action) => {
  return state;
};

export const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactsFilter,
});
