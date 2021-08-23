import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getItemsList, getItem } from '../redux/actions/items'
// Types
import { RootState } from '../types'
// Components
import { MainItem, MessageBox } from '../components'
import { IItem } from '../types'


export const Main = () => {
	const { items, isLoaded } = useSelector(({ catalog }: RootState) => catalog)

	const selectItemHandler = (item: IItem) => {
		dispatch(getItem(item))
	}
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getItemsList({ category: 1, type: null, brand: null }))
	}, [])

	useEffect(() => {
		document.title = `Photo Store`
	}, [])
	return (
		<div>
			{
				isLoaded ? (
					items.length && items.map((item: IItem) => {
						const { id, name, model, description, price, images_500 } = item
						return <MainItem 
							key={item.id}
							id={id}
							name={name}
							model={model}
							description={description}
							price={price}
							selectItemHandler={() => selectItemHandler(item)}
							image={images_500[0]}
						/>
						})
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
