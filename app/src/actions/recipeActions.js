import axios from 'axios';
export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const MORE_RESULTS = 'MORE_RESULTS';

const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;

export const fetchRecipes = (queryString) => (dispatch, getState) => {
	// set isFetching to true and display loading message
	dispatch({ type: FETCH_RECIPES_START });
	//make API request
	axios
		.get(
			`https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${API_KEY}&from=${
				getState().fromPage || 0
			}`
		)
		.then((res) => {
			console.log(res);
			dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
		})
		.catch((err) => console.log(err));
};

export const moreResults = (results) => (dispatch) => {
	dispatch({ type: MORE_RESULTS, payload: results });
};
