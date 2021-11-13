//Using redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsList, contactsFilter } from "../redux/phonebook/reducers";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "products",
  version: 1,
  storage,
  whitelist: ["contacts"],
};

const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactsFilter,
});
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
console.log(`persistor`, persistor);

//using vanilla redux
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { contactsReducer } from "./phonebook/reducers";

// export const store = createStore(contactsReducer, composeWithDevTools());
