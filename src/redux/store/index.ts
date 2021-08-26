import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState as basketIS } from "../reducers/basket";
import { initialState as filterIS } from "../reducers/filter";
import { getPersistedData } from "./persisted";
import { RootState } from "../../types";
import { PersistedStore } from "../../types";

const persistedStore: PersistedStore = {
  basket: getPersistedData(localStorage.getItem("basket"), basketIS),
  filter: getPersistedData(sessionStorage.getItem("filter"), filterIS),
};

export const store = createStore(
  rootReducer,
  persistedStore as RootState,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log("state state: ", store.getState().basket);

store.subscribe(() => {
  store.getState().filter &&
    sessionStorage.setItem("filter", JSON.stringify(store.getState().filter));
});

store.subscribe(() => {
  store.getState().basket &&
    localStorage.setItem("basket", JSON.stringify(store.getState().basket));
});
