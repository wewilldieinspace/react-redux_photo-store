import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { basket } from './reducers/basket'
import { initialState } from './reducers/basket'
import { RootState } from '../types'

type PersistedStore = {
	basket: {
		items: any, 
		totalPrice: number | null,
		totalItems: number | null
	} | string;
	filter: {
		type: number | null,
		category: number | null,
		brand: number | null	
	} | string
}

const getPersistedData = (storage: string | null, initialState: any) => {
	if (storage) {
		return JSON.parse(storage)
	}
	return initialState
}

const basket = getPersistedData(localStorage.getItem('basket'), {
	items: {}, 
	totalPrice: null,
	totalItems: null
})

const filter = getPersistedData(sessionStorage.getItem('filter'), {
	type: null,
	category: null,
	brand: null
})

const persistedStore: any = {
	basket,
	filter
}

export const store = createStore(
	rootReducer, 
	persistedStore,
	composeWithDevTools(
			applyMiddleware(thunk)
	)
)

console.log('state state: ', store.getState().basket)

store.subscribe(() => {
	localStorage.setItem('basket', JSON.stringify(store.getState().basket)),
	sessionStorage.setItem('filter', JSON.stringify(store.getState().filter))
})