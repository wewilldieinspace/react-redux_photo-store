import { combineReducers } from 'redux'
import { catalog } from './catalog'
import { basket } from './basket'
import { item } from './item'
import { filter } from './filter'


export const rootReducer = combineReducers({
	catalog, 
	basket, 
	item,
	filter
})

