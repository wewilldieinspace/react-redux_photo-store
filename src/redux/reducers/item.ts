import { types } from '../actionTypes'
import { AnyAction } from 'redux'
import { IItem } from '../../types'


const initialState: IinitialState = {
	item: {},
	isLoaded: false
}

interface IinitialState {
	item: IItem | {};
	isLoaded: boolean;
}

export const item = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.GET_ONE_ITEM:
			return {
				...state,
				item: action.payload,
				isLoaded: true
			}
		default: 
			return state
	}
}