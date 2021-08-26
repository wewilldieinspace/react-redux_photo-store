import React from "react";
import { Link } from "react-router-dom";
// Types
import { ICatalogItem } from "../../types";
// Utils
import { createItemUrl } from "../../utils/createItemUrl";

export const CatalogItem = ({
  name,
  model,
  image,
  price,
  itemId,
}: ICatalogItem) => {
  return (
    <div className="catalog-item">
      <div
        className="catalog-item__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="catalog-item__info">
        <h2 className="catalog-item__title">{`${name} ${model}`}</h2>
        <p className="catalog-item__price">{price.toLocaleString()}$</p>
        <Link to={`/item/${createItemUrl(itemId, name, model)}`}>
          <button className="catalog-item__learn-button">learn more</button>
        </Link>
      </div>
    </div>
  );
};
