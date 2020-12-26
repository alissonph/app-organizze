import { combineReducers } from "redux";
import account from "./account";
import card from "./card";
import errorMessage from "./errorMessage";

export default combineReducers({
    account,
    card,
    errorMessage,
});
