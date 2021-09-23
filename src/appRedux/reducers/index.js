import { combineReducers } from "redux";
import reducerRecycle from "./reducerRecycle";
import reducerAuth from "./reducerAuth";

export default combineReducers({
	reducerRecycle,
	reducerAuth,
});
