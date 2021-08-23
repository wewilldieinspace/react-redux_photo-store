import React, { useState, useEffect, useRef, memo } from 'react'
// Types
import { Popup as PopupTypes } from '../../types'


export const Popup = memo(({ filterBy, activeItem, onChangeFilter }: PopupTypes) => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const elementRef = useRef<HTMLLIElement | null>(null)

	const { name, elements } = filterBy

	const togglePopup = () => {
		setOpen(!isOpen)
	}

	const outsideClickHandler = (e: MouseEvent) => {
		if (elementRef.current !== e.target) {
			setOpen(false)
		}
	}
	useEffect(() => {
		document.body.addEventListener('click', outsideClickHandler)
		return () => document.body.removeEventListener('click', outsideClickHandler)
	}, [])
	return (
		<li 
			className="sort-list__element"
		>
			<p className="sort-list__p">{ name }:</p>
			<div 
				className='sort-list__element__input'
				onClick={togglePopup}
			>
				<ul 
					className={`sort-list__element__pop-up 
					${isOpen ? 'sort-list__element__pop-up--open' : ''}`}
				>
					<li
						ref={elementRef}
						onClick={togglePopup}
						className='sort-list__element__pop-up__element--active'
					>
						{ activeItem === null ? 'All' : elements[activeItem] }
					</li>
					{
						isOpen && (
							<>
								<hr/>
								<li
									className={`sort-list__element__pop-up__element 
									${activeItem == null ? 'sort-list__element__pop-up__element--active' : ''}`}
									onClick={() => onChangeFilter(null)}
								>
									All
								</li>
							</>
						)
					}
					{
						isOpen && elements.map((el, i) => {
							return (
								<li
									key={`${el}_${i}`}
									className={`sort-list__element__pop-up__element 
									${activeItem == i ? 'sort-list__element__pop-up__element--active' : ''}`}
									onClick={() => onChangeFilter(i)}
								>
									{ el }
								</li>
							)
						})
					}
				</ul>
			</div>
		</li>
	)
})
