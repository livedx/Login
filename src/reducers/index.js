import users from './authReducer'


import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  version: 0,
  whitelist: ["users"]
};

export const rootReducer = persistCombineReducers(persistConfig, {
  users
});
