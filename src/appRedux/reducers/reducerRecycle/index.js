import { cloneDeep } from "lodash";
import * as actionTypes from "../../actions/actionTypes";
import * as constants from "../../../constants/ActionTypes";

const initialState = {
	recycles: [
		{
			id: 1,
			text: "Recycle 1",
			description: "Some description about this recycle item.",
			image:
				"https://i.natgeofe.com/n/fe039476-4f1a-4149-aeb1-3ec392fd964d/01-animals-plastic-nationalgeographic_2729678.jpg",
		},
		{
			id: 2,
			text: "Recycle 2",
			description: "Some description about this recycle item.",
			image:
				"https://www.greenpeace.org/static/planet4-international-stateless/2019/03/530878d8-gp0stt3fm.jpg",
		},
		{
			id: 3,
			text: "Recycle 3",
			description: "Some description about this recycle item.",
			image:
				"https://i.natgeofe.com/n/bb02ccce-d691-418f-b172-ad0e9dcee409/animals-plastic-nationalgeographic_2283735.jpg?w=636&h=424",
		},
		{
			id: 4,
			text: "Recycle 4",
			description: "Some description about this recycle item.",
			image:
				"https://i.natgeofe.com/n/824d5de0-6e47-456c-9c8e-6027a6eb716e/animals-plastic-nationalgeographic_1230842.jpg",
		},
		{
			id: 5,
			text: "Recycle 5",
			description: "Some description about this recycle item.",
			image:
				"https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_1093(1).jpg",
		},
		{
			id: 6,
			text: "Recycle 6",
			description: "Some description about this recycle item.",
			image:
				"https://assets.weforum.org/article/image/93s_e1_Zeb4fYRNjoya1JFUXZ7b7u4sht9NIB1NOeGM.JPG",
		},
		{
			id: 7,
			text: "Recycle 7",
			description: "Some description about this recycle item.",
			image:
				"https://www.dailymaverick.co.za/wp-content/uploads/2021/08/Walker-Recycling-04-scaled.jpg",
		},
		{
			id: 8,
			text: "Recycle 8",
			description: "Some description about this recycle item.",
			image:
				"https://blogs.afdb.org/sites/default/files/csm_blog-plastic-pollution.jpg",
		},
		{
			id: 9,
			text: "Recycle 9",
			description: "Some description about this recycle item.",
			image:
				"https://i.guim.co.uk/img/media/6dc10804aeef623aae78b974d4d0660d25b6bfe1/0_108_4600_2761/master/4600.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c6ec62fdfd9f16d9dcbf54ac859c115a",
		},
		{
			id: 10,
			text: "Recycle 10",
			description: "Some description about this recycle item.",
			image:
				"https://media.istockphoto.com/photos/waves-pushing-plastic-waste-to-the-beach-picture-id1208182476?k=20&m=1208182476&s=612x612&w=0&h=ird8WMaie63f4wL0c7KQ8cW9sVrB2hrNpDI4xtKrQUs=",
		},
		{
			id: 11,
			text: "Recycle 11",
			description: "Some description about this recycle item.",
			image:
				"https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2021/09/14141403/The-New-Raw-3d-pringing-with-recycled-plastic.jpg",
		},
	],
	recycle: {},
};

const reducerRecycleAdd = (state, action) => ({
	...cloneDeep(state),
	recycles: [
		...state.recycles,
		{
			text: action.payload.text,
			description: action.payload.description,
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
