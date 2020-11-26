  
import api from '../../services/api';
import { addProducts, addProduct } from '../ducks/products';

export const getAllProducts = () => {
	return (dispatch) => {
		api
			.get('/products')
			.then((res) => {
				dispatch(addProducts(res.data));
			})
			.catch(console.log);
	};
};

export const addProductFetch = (product) => {
	return (dispatch) => {
		api.post('/products', product).then((res) => dispatch(addProduct(res.data))).catch(console.log);
	};
};