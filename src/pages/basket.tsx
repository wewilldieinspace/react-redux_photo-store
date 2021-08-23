import React, { useState, useEffect } from 'react'
// Hooks
import { useStorage } from '../hooks/useStorage'
import { deleteFromBasket } from '../redux/actions/basket' 
// Redux
import { useSelector, useDispatch } from 'react-redux'
// Types
import { IBasketItem, IItem, RootState } from '../types'
// Components
import { BasketItem } from '../components'
import { composeWithDevTools } from 'redux-devtools-extension'


// {items: IBasketItem[] , currentItemsPrice: number, currentItemsCounter: number}

interface IBasket {
	items: IItem[], 
	currentItemsPrice: number,
	currentItemsCounter: number
}


export const Basket = () => {
	// const [storedValue, clearStorage] = useStorage('basket')
	const { items, totalPrice, totalItems } = useSelector(({ basket }: RootState) => basket)
// const { items } = storedValue

	const itemsList = Object.keys(items).map(id => {
		return items[id]
	})

	const dispatch = useDispatch()

	const deleteItem = (id: number) => {
		dispatch(deleteFromBasket(id))
	} 
	useEffect(() => {
		document.title = `Basket | Photo Store`
		// dispatch()
	}, [])    
	return (
		<div className="basket">
			<ul className="basket__list">
				{ 
					itemsList.length ? (
						itemsList.map((item: IBasket, index: number) => {
						console.log('item item item', item);
						const { name, model, id } = item.items[0]
						const currentItem = item.items[0]
						const { currentItemsPrice, currentItemsCounter } = item
						return <BasketItem
							key={ `${name}_${model}_${index}` }
							item={ currentItem }
							currentItemsPrice={ currentItemsPrice }
							currentItemsCounter={ currentItemsCounter }
							deleteItemHandler={ deleteItem }
						/>
				})) : (
					<li className='baslet__list--empty'>
						instead of reading, 
						you can buy something. 
						come on, don't be a fool and don't 
						waste other valuable time on this nonsense
					</li>
				)
			}
			{itemsList.length ? (
				<div>
					<p className="basket__total-price">total price: { totalPrice ? String(totalPrice).toLocaleString() : null }$</p>
					<p className="basket__total-item-counter">total items: { totalItems }</p>
				</div>
			) : null}
			</ul>
		</div>
	)
}
