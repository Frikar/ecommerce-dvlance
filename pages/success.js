import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import {BsBagCheckFill} from "react-icons/bs";

import {useStateContext} from "../context/StateContext";
import {runFireworks} from "../lib/utils";

const Success = () => {
	const {setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

	useEffect(() => {
		localStorage.clear();
		setCartItems([])
		setTotalPrice(0)
		setTotalQuantities(0)
		runFireworks()
	}, [])
	return (
		<div className="success-wrapper">
			<div className="success">
				<p className="icon">
					<BsBagCheckFill/>
				</p>
				<h2>Gracias por tu compra</h2>
				<p className="email-msg">Revisa tu bandeja de entrada para recibir tu recibo</p>
				<p className="description">Si tienes alguna pregunta, envia un correo a
					<a href="mailto:order@example.com" className="email">order@example.com</a>
				</p>
				<Link href="/">
					<button type="button" className="btn" style={{width: 300}}>
						Continuar comprando
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
