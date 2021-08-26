import React from "react";
import { Link } from "react-router-dom";
// Types
import { IMainPageItem } from "../../types";
// Utils
import { createItemUrl } from "../../utils/createItemUrl";

export const MainItem = ({
  id,
  name,
  model,
  description,
  price,
  image,
}: IMainPageItem) => {
  const shortDescription = description.slice(0, 250).replace(/\s(\D)*$/gm, "");
  return (
    <div className="main-item">
      <div className="main-item__info">
        <h3 className="main-item__info__name">
          {name} {model}
        </h3>
        <p className="main-item__info__description">{shortDescription}</p>
        <p className="main-item__info__price">{price.toLocaleString()}$</p>
        <Link
          to={
            `/item/${createItemUrl(id, name, model)}`
          }
        >
          <button className="main-item__info__learn-more-button">
            learn more
          </button>
        </Link>
      </div>
      <div
        className="item__image main-item__image"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};
