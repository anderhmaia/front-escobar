
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';

import ItemCart from '../../components/ItemCart';
import { addMessage } from '../../store/ducks/layout';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function removeItemCart(product) {
		dispatch(removeItem(product._id));

		dispatch(addMessage(`${product.name} removido com sucesso!!!`));
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{cart.length === 0 ? (
					<p className="col-sm-12 mt-5 text-danger text-center"><font size="90">O carrinho está vazio!!</font></p>
				) : (
					<React.Fragment>
						{cart.map((item) => <ItemCart key={item._id} item={item} removeItemCart={removeItemCart} />)}
					</React.Fragment>
				)}
			</div>
		</div>
	);
}