import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ducks/products';
import layoutReducer from './ducks/layout';
import cartReducer from './ducks/cart'

export default configureStore({
	reducer: {
		products: productsReducer,
		layout: layoutReducer,
		cart: cartReducer
	}
})