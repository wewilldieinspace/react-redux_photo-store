import React from 'react'
import { Link } from 'react-router-dom'
// Types
import { ICatalogItem } from '../../types'

export const CatalogItem = ({ name, model, image, price, selectItemHandler }: ICatalogItem) => {
	return (
		<div 
			className='catalog-item'
		>
			<div 
					className="catalog-item__image"
					style={{ backgroundImage: `url(${ image })` }}
			/>
			<div className="catalog-item__info">
				<h2 className='catalog-item__title'>{ `${name} ${model}` }</h2>
				<p className='catalog-item__price'>{ price.toLocaleString() }$</p>
				<Link to={`/item/${ name }_${ model.replace(/[\s, '/']/g, '_') }`}>
					<button onClick={selectItemHandler} className='catalog-item__learn-button'>learn more</button>
				</Link>
			</div>
		</div>
	)
}
