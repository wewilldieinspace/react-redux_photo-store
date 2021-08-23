import { types } from '../actionTypes'
import { FilterElements } from '../../types'

export const filterCategory = (index: number | null) => ({
	type: types.FILTER_CATEGORY,
	payload: index
})

export const filterType = (index: number | null) => ({
	type: types.FILTER_TYPE,
	payload: index
})

export const filterBrand = (index: number | null) => ({
	type: types.FILTER_BRAND,
	payload: index
})