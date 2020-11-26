
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addMessage } from '../../store/ducks/layout';

import { addProductFetch } from '../../store/fetchActions';

export default function Add() {
	const [form, setForm] = useState({ name: '', url: '' });
	const dispatch = useDispatch();

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();

		dispatch(addProductFetch(form));

		setForm({ name: '', url: '' });

		dispatch(addMessage('Cadastro com sucesso!'));
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group row" style={{ paddingTop: 30 }}>
				<label class="col-sm-1 col-form-label">Nome:</label>
				<div class="col-sm-10">
					<input
						onChange={formChange}
						type="text"
						name="name"
						className="form-control"
						placeholder="Nome"
						value={form.name}
					/>
				</div>
			</div>
			<div className="form-group row" style={{ paddingTop: 50 }}>
				<label class="col-sm-1 col-form-label">URL:</label>
				<div class="col-sm-10">
					<input
						onChange={formChange}
						type="text"
						name="url"
						className="form-control"
						placeholder="URL"
						value={form.url}
					/>
				</div>
			</div>
			<div className="form-group row" style={{ paddingTop: 50, paddingLeft: 938}}>
				<button type="submit" className="btn btn-danger">
					Adicionar
			</button>
			</div>
		</form>
	);
}