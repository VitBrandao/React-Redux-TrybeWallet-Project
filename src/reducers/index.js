import { userReducer } from "./user";
import { walletReducer } from "./wallet";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ userReducer, walletReducer });

export default rootReducer;
