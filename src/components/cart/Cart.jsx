import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({ setShowCart }) {
	return (
		<div
			onClick={() => setShowCart(false)}
			className="fixed inset-0 z-50 bg-black bg-opacity-50"
		>
			<div
				className="absolute right-0 h-full w-screen max-w-screen-sm overflow-y-auto bg-white p-4 shadow-lg md:w-1/2 lg:w-1/3"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={() => setShowCart(false)}
					className="absolute right-4 top-4"
				>
					<IoClose className="size-7" />
				</button>
				<div>
					<h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
					{/* <p>Cart is currently empty.</p> */}
					<div className="mb-14 flex flex-col gap-4">
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
				</div>
				<div className="fixed bottom-0 right-0 box-border w-1/2 max-w-screen-sm bg-primary p-4 duration-300 hover:brightness-75 lg:w-1/3">
					<Link
						to="/checkout"
						onClick={() => setShowCart(false)}
						className="flex w-full items-center justify-center uppercase"
					>
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Cart;
