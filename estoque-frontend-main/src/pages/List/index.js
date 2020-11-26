
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';

import { getAllProducts } from '../../store/fetchActions';
import { addItem } from '../../store/ducks/cart';
import { addMessage} from '../../store/ducks/layout'

export default function List() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getAllProducts());
		},
		[ dispatch ]
	);

	function addItemCart(product) {
		dispatch(addItem(product));

		dispatch(addMessage(`${product.name} adicionado com sucesso!`));
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{products.map((product, index) => <Product key={index} product={product} addItemCart={addItemCart} />)}
			</div>
		</div>
	);
}