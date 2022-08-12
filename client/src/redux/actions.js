export const GET_ALL_HOTELS = 'GET_ALL_HOTELS';
export const FILTER_BY_STARS = 'FILTER_BY_STARS';
export const FILTER_BY_RATING = 'FILTER_BY_RATING';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';


export const getAllHotels = () => {

	const url = 'http://localhost:3001/hotels';

	return async function(dispatch) {
		return await fetch(url)
			.then( response => response.json() )
			.then( data => {
				return dispatch({type: GET_ALL_HOTELS, payload: data})
			})
			.catch( error => console.log(error) )
	}
}

export const filterByStars = (stars) => {

	const url = `http://localhost:3001/hotels/category/${stars}`;

	return async function(dispatch) {
		return await fetch(url)
			.then( response => response.json() )
			.then( data => {
				return dispatch({type: GET_ALL_HOTELS, payload: data})
			})
			.catch( error => console.log(error) )
	}
}

export const filterByRating = (rating) => {

	const url = `http://localhost:3001/hotels/rating/${rating}`;

	return async function(dispatch) {
		return await fetch(url)
			.then( response => response.json() )
			.then( data => {
				return dispatch({type: FILTER_BY_RATING, payload: data})
			})
			.catch( error => console.log(error) )
	}
}

export const orderByPrice = (value) => {

	const url = `http://localhost:3001/hotels/price/${value}`;

	return async function(dispatch) {
		return await fetch(url)
			.then( response => response.json() )
			.then( data => {
				return dispatch({type: ORDER_BY_PRICE, payload: data})
			})
			.catch( error => console.log(error) )
	}
}