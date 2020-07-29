import {
	FETCH_RECIPES_START,
	FETCH_RECIPES_SUCCESS,
	FETCH_RECIPES_ERROR,
	MORE_RESULTS,
} from '../actions/recipeActions';

const initialState = {
	recipes: [],
	fromPage: null,
	toPage: null,
	more: null,
	isFetching: false,
	error: '',
};

export const recipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RECIPES_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_RECIPES_SUCCESS:
			return {
				...state,
				isFetching: false,
				recipes: action.payload.hits,
				more: action.payload.more,
				fromPage: action.payload.from,
				toPage: action.payload.to,
				error: '',
			};
		case FETCH_RECIPES_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case MORE_RESULTS:
			return {
				...state,
				fromPage: action.payload,
			};
		default:
			return state;
	}
};
