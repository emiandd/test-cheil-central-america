import {	GET_ALL_HOTELS,
		  		FILTER_BY_STARS,
		  		FILTER_BY_RATING,
		  		ORDER_BY_PRICE } from './actions.js';

const initialState = {
	allHotels: []
}

export default function reducer( state = initialState, action ){

	switch (action.type) {

		case GET_ALL_HOTELS:
			return{
				...state,
				allHotels: action.payload
			}

		case FILTER_BY_STARS:
			return{
				...state,
				allHotels: action.payload
			}

		case FILTER_BY_RATING:
			return{
				...state,
				allHotels: action.payload
			}

		case ORDER_BY_PRICE:
			return{
				...state,
				allHotels: action.payload
			}

		default:
			return state;
	}


}