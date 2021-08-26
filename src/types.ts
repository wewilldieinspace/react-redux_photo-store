import { rootReducer } from './redux/reducers'

export type RootState = ReturnType<typeof rootReducer>
export interface IItem {
	name: string;
	model: string;
	category: number;
	type: number;
	description: string;
	features: string[];
	images_500: string[];
	images_55: string[];
	price: number;
	id: number;
}

export interface IMainPageItem {
	id: number;
	name: string;
	model: string;
	description: string;
	price: number;
	image: string;
}

export interface ICatalogItem {
	itemId: number;
	name: string;
	model: string;
	price: number;
	image: string;
}

export interface IBasketItem {
	name: string;
	model: string;
	price: number;
	image: string; 
	itemCounter?: number
	totalPrice?: number
	id: number;
}

export type Popup = {
	filterBy: {
		name: 'Category' | 'Type' | 'Brand',
		elements: string[]
	};
	activeItem: number | null;
	onChangeFilter: (arg: number | null) => void;
	// onChangeFilter: (arg: OnChangeFilterPropTypes) => void;
}

export type FilterElements = {
	category: number | null,
	type: number | null,
	brand: number | null,
}

export type PersistedStore = {
  basket: {
        items: any;
        totalPrice: number | null;
        totalItems: number | null;
      }
    | string | never;
  filter: {
        type: number | null;
        category: number | null;
        brand: number | null;
      }
    | string | never;
};