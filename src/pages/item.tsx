import React, { useEffect, useState, Fragment } from 'react'
// Hooks
import { useStorage } from '../hooks/useStorage'
// Redux 
import { useSelector, useDispatch } from 'react-redux'
// import { getItem } from '../redux/actions/items'
import { addToBasket } from '../redux/actions/basket'
// Type
import { RootState } from '../types'
// Components
import { MessageBox } from '../components'


export const Item = () => {
	const [storedValue, setStorage, clearStorage] = useStorage('basket')
	const [image, setImage] = useState(0)
	const { item, isLoaded } = useSelector(({ item }: RootState) => item)
	console.log('item', item);
	const dispatch = useDispatch()

	
	const addToBasketHandler = () => {
		dispatch(addToBasket(item))
		setStorage(item)
	}

	useEffect(() => {
		window.scrollTo({top: 0})
	}, [])

	useEffect(() => {
		document.title = item ? `${item.model} | Photo Store` : `Photo Store`
	}, [item])

	const changeMainImage = (index: number) => {
		setImage(index)
	}
	return (
		<div>
			{
				isLoaded ? (
					<Fragment>
						<h1 className="item-page__name">
							{ item.name } { item.model }
						</h1>
						<div className="item-page__add-to-cart">
							<div className="item-page__item-main">
								<div className="item-page__main-img">
									<img
										className="item-page__img-list__main-img"
										src={ item.images_500[image] }
										alt={ item.name }
									/>
									<ul className="item-page__img-list">
									{item.images_55.length &&
											item.images_55.map((image: string, index: number) => {
											return (
													<li
															key={`${ item.name }_${ index }`}
															className="item-page__img-list-item"
															style={{ backgroundImage: `url(${ image })` }}
															onClick={() => changeMainImage(index)}
													>
													</li>
											)
											})}
									</ul>
								</div>
								<div className="add-to-cart">
									<p className="item-page__price">${ item.price.toLocaleString() }</p>
									<button
										onClick={ addToBasketHandler } 
										className="item-page__add-to-cart-button"
									>
										Add to Cart
									</button>
								</div>
							</div>
							<div className="item-page__description">
								<div className="description">
									<div className="description__features">
										<h3 className="description__features__title">Features</h3>
										<ul className="description__features-list">
											{ 
												item.features &&
												item.features.map((feature: string, index: number) => {
													return (
														<li
															className="description__features__list__element"
															key={`${ feature }_${ index }`}
														>
															{ feature }
														</li>
													)
												})
												}
										</ul>
										<p className="description__main">{ item.description }</p>
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				) : (
					<MessageBox>
						Pam Pam Pam. <br/>
						It's loading
					</MessageBox>
				)
			}
		</div>
	)
}
