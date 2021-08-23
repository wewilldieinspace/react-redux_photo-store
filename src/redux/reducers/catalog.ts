import { types } from '../actionTypes'
import { AnyAction } from 'redux'


const initialState: {items: []; isLoaded: boolean} = {
	items: [],
	isLoaded: false
}

export const catalog = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.GET_ITEMS: 
			return {
				...state,
				items: action.payload,
				isLoaded: true
			}
		case types.SET_LOADED: 
		return {
			...state,
			isLoaded: action.payload
		}
		default: 
			return state
	} 
}