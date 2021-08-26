import { types } from '../actionTypes'
import { AnyAction } from 'redux'


export const initialState: IInitialState = {
	items: {}, 
	totalPrice: null,
	totalItems: null
}

interface IInitialState {
	items: any;
	totalPrice: number | null;
	totalItems: number | null;
}

const getCurrentItemsPrice = (items: any) => items.reduce((prev: any, cur: any) => prev + cur.price, 0)

const getTotalPrice = (items: any) => {
	return Object.values(items).reduce((prev: any, cur: any) => {
		return prev + cur.currentItemsPrice
	}, 0)
}

const getTotalItemsCounter = (items: any) => {
	return Object.values(items).reduce((prev: any, cur: any) => {
		console.log('price resuce: ', cur)
		return prev + cur.items.length
	}, 0)
}

export const basket = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.BASKET_ADD: {
			const currentItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]

			const items = {
				...state.items,
				[action.payload.id]: {
					items: currentItems,
					currentItemsPrice: getCurrentItemsPrice(currentItems),
					currentItemsCounter: currentItems.length
				}
			}
			return {
				...state,
				items, 
				totalPrice: getTotalPrice(items),
				totalItems: getTotalItemsCounter(items)
			}
		}
		case types.BASKET_DELETE: {

			console.log('sdfsdfsd', state.items[action.payload].items)

			if (state.items[action.payload].items.length > 1) {
				const newItemList = state.items[action.payload].items.slice(1)
				const newItems = {
					...state.items,
					[action.payload]: {
						items: newItemList,
						currentItemsPrice: getCurrentItemsPrice(newItemList),
						currentItemsCounter: newItemList.length
					}, 
				}
				return {
					...state,
					items: newItems,
					totalPrice: getTotalPrice(newItems),
					totalItems: getTotalItemsCounter(newItems)
				}
			} else{
				const newItems = {
					...state.items
				}
				const currentItemsPrice = newItems[action.payload].currentItemsPrice
				const currentItemsCounter = newItems[action.payload].currentItemsCounter
				delete newItems[action.payload]

				return {
					...state,
					items: newItems,
					totalPrice: state.totalPrice && state.totalPrice - currentItemsPrice,
					totalItems: state.totalItems && state.totalItems - currentItemsCounter

				}
			}
		}
		case types.BASKET_CLEAR: {
			return initialState
		}
		default: {
			return state
		}
	}
}