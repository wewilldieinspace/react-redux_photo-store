import React, { useRef, useState, useEffect } from 'react'
// Types
import { ISortItems } from '../../types'




export const SortPopup = ({ name, type, elements }: ISortItems) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const categoryArr = ['Nikon', 'Canon', 'Sony']

    console.log('activeItem', activeItem)

    const sortPopupHandler = (index: number | null) => {
        setActiveItem(index)
    }

    const togglePopUp = () => {
        setOpen(value => !value)
    }

    const handleOutsideClick = (e: any) => {
        const path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(popupRef.current)) {
            setOpen(false)
        }
    }

    useEffect(() => { 
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <li className="sort-list__element">
            <p>{ name }:</p>
            <div 
                className='sort-list__element__input'
                ref={popupRef}
                onClick={togglePopUp}
            >
                <ul 
                    className={`sort-list__element__pop-up 
                    ${isOpen ? 'sort-list__element__pop-up--open' : ''}`}
                >
                    <li
                        className='sort-list__element__pop-up__element--active'
                    >
                        { activeItem == null ? 'All' : elements[activeItem] }
                    </li>
                    {
                        isOpen && (
                            <>
                                <hr/>
                                <li
                                    className={`sort-list__element__pop-up__element 
                                    ${activeItem == null ? 'sort-list__element__pop-up__element--active' : ''}`}
                                    onClick={() => sortPopupHandler(null)}
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
                                    onClick={() => sortPopupHandler(i)}
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
}
