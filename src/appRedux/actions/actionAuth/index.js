import * as actionTypes from "../actionTypes";
import * as constants from "../../../constants/ActionTypes";
import AuthApi from "../../../api/AuthApi";

export const actionAuthLogin = (loginObj) => {
	return {
		type: actionTypes.AUTH_LOGIN,
		payload: loginObj,
	};
};

export const actionAuthSignup = (signupObj) => {
	return {
		type: actionTypes.AUTH_SIGNUP,
		payload: signupObj,
	};
};

export const thunkAuthLogin = (params, callback) => {
	return (dispatch) => {
		AuthApi.login(params).then((data) => {
			console.log("logged in", data);
			dispatch(actionAuthLogin(data));
			callback();
		});
	};
};

export const thunkAuthSignup = (params, callback) => {
	return (dispatch) => {
		AuthApi.signup(params).then((data) => {
			console.log("signed up", data);
			dispatch(actionAuthSignup(data));
			callback();
		});
	};
};
