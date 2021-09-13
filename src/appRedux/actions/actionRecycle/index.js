import * as actionTypes from "../actionTypes";
import * as constants from "../../../constants/ActionTypes";

export const actionRecycleAdd = (recycleObj) => {
	return {
		type: actionTypes.RECYCLE_ADD,
		payload: recycleObj,
	};
};

export const actionRecycleUpdate = (recycleObj) => {
	return {
		type: actionTypes.RECYCLE_UPDATE,
		payload: recycleObj,
	};
};

export const actionRecycleRemove = (recycleId) => {
	return {
		type: actionTypes.RECYCLE_REMOVE,
		payload: recycleId,
	};
};
