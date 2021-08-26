import { types } from "../actionTypes";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { IItem } from "../../types";

export const getItemsList =
  ({
    category,
    type,
    brand,
  }: {
    category: number | null;
    type: number | null;
    brand: string | null;
  }): ThunkAction<Promise<void>, IItem[], null, Action> =>
  async (dispatch) => {
    dispatch({ type: types.SET_LOADED, payload: false });

    const categoryQuery = category !== null ? `category=${category + 1}` : "";
    const typeQuery = type !== null ? `type=${type + 1}` : "";
    const brandQuery = brand !== null ? `name=${brand}` : "";

    const queryParamsArray = [categoryQuery, typeQuery, brandQuery].filter(
      (el) => !!el
    );
    const query = `?${queryParamsArray.join("&")}`;

    const items = await response(`http://localhost:8000/items/${query}`);

    dispatch({
      type: types.GET_ITEMS,
      payload: items,
    });
  };

const response = async (url: string) => {
  const request = await fetch(url);
  return await request.json();
};
