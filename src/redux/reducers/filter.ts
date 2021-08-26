import { types } from '../actionTypes'
import { AnyAction } from 'redux'
import { FilterElements } from '../../types'

export const initialState: FilterElements = {
	type: null,
	category: null,
	brand: null
}

export const filter = (state = initialState,  action: AnyAction) => {
	switch (action.type) {
		case types.FILTER_CATEGORY:
			return {
				...state,
				category: action.payload
			}
		case types.FILTER_TYPE:
			return {
				...state,
				type: action.payload
			}
		case types.FILTER_BRAND:
			return {
				...state,
				brand: action.payload
			}
		default:
			return state
	}
}