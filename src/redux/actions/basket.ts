import { types } from '../actionTypes'
import { IBasketItem, IItem } from '../../types'

export const addToBasket = (item: IItem) => ({
	type: types.BASKET_ADD,
	payload: item
})

export const deleteFromBasket = (id: number) => ({
	type: types.BASKET_DELETE,
	payload: id
})

export const confirmPurchase = () => ({
	type: types.BASKET_BUY
})