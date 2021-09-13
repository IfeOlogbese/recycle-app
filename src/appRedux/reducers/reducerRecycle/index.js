import { cloneDeep } from "lodash";
import * as actionTypes from "../../actions/actionTypes";
import * as constants from "../../../constants/ActionTypes";

const initialState = {
	recycles: [
		{
			id: 1,
			text: "Recycle 1",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 2,
			text: "Recycle 2",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 3,
			text: "Recycle 3",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 4,
			text: "Recycle 4",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 5,
			text: "Recycle 5",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 6,
			text: "Recycle 6",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 7,
			text: "Recycle 7",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 8,
			text: "Recycle 8",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 9,
			text: "Recycle 9",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 10,
			text: "Recycle 10",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
		{
			id: 11,
			text: "Recycle 11",
			image: "https://wallpaperaccess.com/full/317501.jpg",
		},
	],
	recycle: {},
};

const reducerRecycleAdd = (state, action) => ({
	...cloneDeep(state),
	recycles: [
		...state.recycles,
		{
			text: action.payload.recycleName,
			id: state.recycles.length + 1,
			image: action.payload.image,
		},
	],
});

const reducerRecycleUpdate = (state, action) => {
	const newState = cloneDeep(state);
	const recycles = state.recycles.map((recycle) => {
		if (recycle.id === action.payload.id) {
			return action.payload;
		}
		return recycle;
	});

	return { ...newState, recycles };
};

const reducerRecycleRemove = (state, action) => {
	const newState = cloneDeep(state);
	const recycles = state.recycles.filter(
		(recycle) => recycle.id !== action.payload
	);

	return { ...newState, recycles };
};

const reducerRecycle = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RECYCLE_ADD:
			return reducerRecycleAdd(state, action);
		case actionTypes.RECYCLE_UPDATE:
			return reducerRecycleUpdate(state, action);
		case actionTypes.RECYCLE_REMOVE:
			return reducerRecycleRemove(state, action);
		default:
			return state;
	}
};

export default reducerRecycle;
