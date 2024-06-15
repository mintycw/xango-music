import React from "react";
import { IoClose } from "react-icons/io5";

function Cart({ setShowCart }) {
	return (
		<div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
			<div className="bg-white relative mx-auto h-full w-full max-w-screen-sm overflow-y-auto rounded-lg p-4 shadow-lg">
				<button
					onClick={() => setShowCart(false)}
					className="absolute right-4 top-4"
				>
					<IoClose className="size-7" />
				</button>
				<div>
					<h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
					{/* Add your cart items here */}
					<p>Cart is currently empty.</p>
				</div>
			</div>
		</div>
	);
}

export default Cart;
