import React from 'react'
import { Link } from 'react-router-dom'
// Types
import { IBasketItem, IItem } from '../../types'
// Redux
import { useDispatch } from 'react-redux'
import { getItem } from '../../redux/actions/items'


export const BasketItem = ({ 
	item, 
	currentItemsPrice, 
	currentItemsCounter,
	deleteItemHandler
}: { 
	item: IItem, 
	currentItemsPrice: number, 
	currentItemsCounter: number, 
	deleteItemHandler: (id: number) => void, 
}) => {
	const dispatch = useDispatch()
	const { price, name, images_55: images, model } = item
	// const { currentItemsPrice, currentItemsCounter } = counter
	const correctPrice = price.toLocaleString()
	const correctTotalPrice = currentItemsPrice.toLocaleString()

	const selectItemHandler = (item: IItem) => {
		dispatch(getItem(item))
	}
	return (
		<li className='basket-item'>
			<Link 
				onClick={() => selectItemHandler(item)}
				to={`/item/${ name }_${ model.replace(/[\s, '/']/g, '_') }`}
				className='basket-item__item-link'
			>
				{`${name} ${model}`}
			</Link>
				<div className='basket-item__body'>
					<div className='basket-item__body__image'
						style={{ backgroundImage: `url("${images[0]}")` }}
					/>
					<p 
						className='basket-item__body__price'
					>
						{
							correctTotalPrice}$ { 
								price !== currentItemsPrice 
								? <span>(${correctPrice} x ${currentItemsCounter})</span> 
								: null 
						}
						</p>
					<button 
						className='basket-item__body__delete-item'
						onClick={ () => deleteItemHandler(item.id) }
					>
						{
							currentItemsCounter > 1 
							? 'remove one'
							: 'delete'
						}
					</button>
				</div>
		</li>
	)
}
