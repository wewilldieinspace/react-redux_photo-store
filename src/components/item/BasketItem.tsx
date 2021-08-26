import React from "react";
import { Link } from "react-router-dom";
// Types
import { IItem } from "../../types";
// Utils
import { createItemUrl } from "../../utils/createItemUrl";

export const BasketItem = ({
  item,
  currentItemsPrice,
  currentItemsCounter,
  deleteItemHandler,
}: {
  item: IItem;
  currentItemsPrice: number;
  currentItemsCounter: number;
  deleteItemHandler: (id: number) => void;
}) => {
  const { price, name, images_55: images, model, id } = item;
  const correctPrice = price.toLocaleString();
  const correctTotalPrice = currentItemsPrice.toLocaleString();

  return (
    <li className="basket-item">
      <Link
        to={`/item/${createItemUrl(id, name, model)}`}
        className="basket-item__item-link"
      >
        {`${name} ${model}`}
      </Link>
      <div className="basket-item__body">
        <div
          className="basket-item__body__image"
          style={{ backgroundImage: `url("${images[0]}")` }}
        />
        <p className="basket-item__body__price">
          {correctTotalPrice}${" "}
          {price !== currentItemsPrice ? (
            <span>
              (${correctPrice} x ${currentItemsCounter})
            </span>
          ) : null}
        </p>
        <button
          className="basket-item__body__delete-item"
          onClick={() => deleteItemHandler(item.id)}
        >
          {currentItemsCounter > 1 ? "remove one" : "delete"}
        </button>
      </div>
    </li>
  );
};
