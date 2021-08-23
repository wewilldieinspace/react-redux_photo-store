import React, { memo } from 'react'
// Components
import { Popup } from './Popup'
// Types
// import { IPopup } from '../../types'



// const sortItems: any = [
//     { name: 'Category', type: 'category', elements: ['Popular', 'New'] },
//     { name: 'Type', type: 'type', elements: ['Mirror', 'Mirrorless'] },
//     { name: 'Brand', type: 'brand', elements: ['Nikon', 'Canon', 'Sony'] }
// ]

export const FilterCategory = memo(({ filterData, filterByHandler, activeItems }: any) => {
    return (
        <div className="sort">
            {/* <ul className="sort-list">
                {
                    filterData.length && filterData.map((el: IPopup, i: number) => {
                        const { name, type, elements } = el
                        return (
                            <Popup
                                key={ `${type}_${i}` }
                                name={ name }
                                type={ type }
                                elements={ elements }
                                onChangeFilter={ filterByHandler }
                                activeItem={ activeItems[type] }
                            />
                        )
                    })
                }
            </ul> */}
        </div>
    )
})
