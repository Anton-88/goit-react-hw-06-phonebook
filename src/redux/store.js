import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReducer } from "./phonebook/reducers";

export const store = createStore(contactsReducer, composeWithDevTools());
