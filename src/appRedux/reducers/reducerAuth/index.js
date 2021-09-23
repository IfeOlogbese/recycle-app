import { cloneDeep } from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionTypes from "../../actions/actionTypes";
import * as constants from "../../../constants/ActionTypes";

const initialState = {
	token: null,
	user: {},
};

const reducerAuthLogin = (state, action) => {
	AsyncStorage.setItem("token", action.payload.token);

	return {
		...cloneDeep(state),
		token: action.payload.token,
		user: {
			username: action.payload.username,
		},
	};
};

const reducerAuthSignup = (state, action) => {
	AsyncStorage.setItem("token", action.payload.token);

	return {
		...cloneDeep(state),
		token: action.payload.token,
		user: {
			username: action.payload.username,
		},
	};
};

const reducerAuth = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			return reducerAuthLogin(state, action);
		case actionTypes.AUTH_SIGNUP:
			return reducerAuthSignup(state, action);
		default:
			return state;
	}
};

export default reducerAuth;
