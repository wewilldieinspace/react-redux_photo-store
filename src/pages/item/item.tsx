import React, { useEffect, useState, Fragment, useCallback } from "react";
// React-Router
import { useParams } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basket";
// Type
import { IItem } from "../../types";
// Components
import { MessageBox } from "../../components";

export const Item = () => {
  const { id }: { id: string } = useParams();
  const [image, setImage] = useState(0);
  const [item, setItem] = useState<IItem | null>(null);
  const dispatch = useDispatch();

  const addToBasketHandler = () => {
    item && dispatch(addToBasket(item));
  };

  const fetchItem = useCallback(
    async (id: number) => {
      const response = await fetch(`http://localhost:8000/items?id=${id}`);
      const result = await response.json();
      setItem(result[0]);
    },
    []
  );

  const changeMainImage = (index: number) => {
    setImage(index);
  };

  useEffect(() => {
    fetchItem(Number(id));
    window.scrollTo({ top: 0 });
  }, [fetchItem, id]);

  useEffect(() => {
    document.title = item ? `${item.model} | Photo Store` : `Photo Store`;
  }, [item]);

  return (
    <div>
      {item ? (
        <Fragment>
          <h1 className="item-page__name">
            {item.name} {item.model}
          </h1>
          <div className="item-page__add-to-cart">
            <div className="item-page__item-main">
              <div className="item-page__main-img">
                <img
                  className="item-page__img-list__main-img"
                  src={item.images_500[image]}
                  alt={item.name}
                />
                <ul className="item-page__img-list">
                  {item.images_55.length &&
                    item.images_55.map((image: string, index: number) => {
                      return (
                        <li
                          key={`${item.name}_${index}`}
                          className="item-page__img-list-item"
                          style={{ backgroundImage: `url(${image})` }}
                          onClick={() => changeMainImage(index)}
                        ></li>
                      );
                    })}
                </ul>
              </div>
              <div className="add-to-cart">
                <p className="item-page__price">
                  ${item.price.toLocaleString()}
                </p>
                <button
                  onClick={addToBasketHandler}
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
                    {item.features &&
                      item.features.map((feature: string, index: number) => {
                        return (
                          <li
                            className="description__features__list__element"
                            key={`${feature}_${index}`}
                          >
                            {feature}
                          </li>
                        );
                      })}
                  </ul>
                  <p className="description__main">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <MessageBox>
          Pam Pam Pam. <br />
          It's loading
        </MessageBox>
      )}
    </div>
  );
};
