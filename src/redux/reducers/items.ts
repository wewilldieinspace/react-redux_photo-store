import { types } from '../actionTypes'
import { AnyAction } from 'redux'


const initialState: {items: [], isLoaded: boolean} = {
    items: [],
    isLoaded: false
}

export const items = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case types.GET_ITEMS: 
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case types.GET_ONE_ITEM:
            return {
                ...state,
                item: action.payload[0]
            }
        default: 
            return initialState
    } 
}