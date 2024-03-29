import React, { useEffect, useCallback, Fragment } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getItemsList } from "../../redux/actions/items";
import {
  filterCategory,
  filterType,
  filterBrand,
} from "../../redux/actions/filter";
// Components
import { CatalogItem, MessageBox, Popup } from "../../components";
// Types
import { IItem, RootState } from "../../types";

type FilterDataTipes = {
  category: { name: "Category"; elements: ["Popular", "New"] };
  type: { name: "Type"; elements: ["Mirror", "Mirrorless"] };
  brand: { name: "Brand"; elements: ["Nikon", "Canon", "Sony"] };
};

const filterData: FilterDataTipes = {
  category: { name: "Category", elements: ["Popular", "New"] },
  type: { name: "Type", elements: ["Mirror", "Mirrorless"] },
  brand: { name: "Brand", elements: ["Nikon", "Canon", "Sony"] },
};

export const Catalog = () => {
  const { items, isLoaded } = useSelector(({ catalog }: RootState) => catalog);
  const dispatch = useDispatch();
  const { category, type, brand } = useSelector(
    ({ filter }: RootState) => filter
  );

  const filterByCategoryHandler = useCallback(
    (arg: number | null) => {
      dispatch(filterCategory(arg));
    },
    [dispatch]
  );
  const filterByTypeHandler = useCallback(
    (arg: number | null) => {
      dispatch(filterType(arg));
    },
    [dispatch]
  );
  const filterByBrandHandler = useCallback(
    (arg: number | null) => {
      dispatch(filterBrand(arg));
    },
    [dispatch]
  );

  useEffect(() => {
    const brandStringValue =
      brand !== null ? filterData.brand.elements[brand] : null;
    dispatch(getItemsList({ category, type, brand: brandStringValue }));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [category, type, brand, dispatch]);

  useEffect(() => {
    document.title = `Catalog | Photo Store`;
  }, []);
  return (
    <Fragment>
      {isLoaded ? (
        <>
          <div className="sort">
            <ul className="sort-list">
              <Popup
                filterBy={filterData.category}
                activeItem={category}
                onChangeFilter={filterByCategoryHandler}
              />
              <Popup
                filterBy={filterData.type}
                activeItem={type}
                onChangeFilter={filterByTypeHandler}
              />
              <Popup
                filterBy={filterData.brand}
                activeItem={brand}
                onChangeFilter={filterByBrandHandler}
              />
            </ul>
          </div>
          <div className="catalog-container">
            {items.length ? (
              items.map((item: IItem) => {
                const { name, model, price, id, images_500, type, category } =
                  item;
                return (
                  <CatalogItem
                    key={`${name}_${id}`}
                    itemId={id}
                    name={name}
                    model={model}
                    price={price}
                    image={images_500[0]}
                  />
                );
              })
            ) : (
              <MessageBox>We can't find enything. Pardon</MessageBox>
            )}
          </div>
        </>
      ) : (
        <MessageBox>
          Pam Pam Pam. <br />
          It's loading
        </MessageBox>
      )}
    </Fragment>
  );
};
