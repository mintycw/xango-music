import React, { useState } from "react";
import CartItem from "./CartItem";
import { FaPaypal } from "react-icons/fa6";
import { SiKlarna, SiPaypal } from "react-icons/si";

function Checkout() {
	const [differentAddress, setDifferentAddress] = useState(false);

	return (
		<div className="flex w-full flex-row bg-white pt-24">
			<div className="flex w-2/3 flex-col items-center gap-8 py-8">
				<div className="flex w-1/2 flex-col items-center">
					<span>Personal Information</span>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Name:*</span>
						</div>
						<input
							type="text"
							placeholder="Bart Simpson"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Email:*</span>
						</div>
						<input
							type="text"
							placeholder="bartsimpson@gmail.com"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Phone Number:</span>
						</div>
						<input
							type="text"
							placeholder="+31 6 12345678"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
				</div>
				<div className="flex w-1/2 flex-col items-center">
					<span>Billing Address</span>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">
								Street + Number:*
							</span>
						</div>
						<input
							type="text"
							placeholder="Singelstraat 1"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Postal Code</span>
						</div>
						<input
							type="text"
							placeholder="3513 BL"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">City:</span>
						</div>
						<input
							type="text"
							placeholder="Utrecht"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Country</span>
						</div>
						<select className="select select-bordered">
							<option disabled selected>
								Select a country
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
							<option>Lord of the Rings</option>
							<option>Planet of the Apes</option>
							<option>Star Trek</option>
						</select>
					</label>
					<div className="form-control">
						<label className="label flex cursor-pointer justify-start gap-2">
							<span className="label-text">
								Ship to different address
							</span>
							<input
								onChange={() =>
									setDifferentAddress(!differentAddress)
								}
								type="checkbox"
								className="checkbox"
							/>
						</label>
					</div>
				</div>
				{differentAddress && (
					<div className="flex w-1/2 flex-col items-center">
						<span>Shipping Address</span>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">
									Street + Number:*
								</span>
							</div>
							<input
								type="text"
								placeholder="Singelstraat 1"
								className="input input-bordered w-full max-w-xs"
							/>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">Postal Code</span>
							</div>
							<input
								type="text"
								placeholder="3513 BL"
								className="input input-bordered w-full max-w-xs"
							/>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">City:</span>
							</div>
							<input
								type="text"
								placeholder="Utrecht"
								className="input input-bordered w-full max-w-xs"
							/>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">Country</span>
							</div>
							<select className="select select-bordered">
								<option disabled selected>
									Select a country
								</option>
								<option>Star Wars</option>
								<option>Harry Potter</option>
								<option>Lord of the Rings</option>
								<option>Planet of the Apes</option>
								<option>Star Trek</option>
							</select>
						</label>
					</div>
				)}
				<div className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Payment Method</span>
					</div>
					<div className="flex w-full flex-row gap-4">
						<button
							className="btn flex-1"
							onClick={(e) => e.stopPropagation()}
						>
							<SiPaypal />
						</button>
						<button
							className="btn flex-1"
							onClick={(e) => e.stopPropagation()}
						>
							<SiKlarna />
						</button>
					</div>
				</div>
			</div>
			<div className="flex w-1/3 flex-col gap-4 bg-background p-4">
				<h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
				{/* <p>Cart is currently empty.</p> */}
				<div className="flex flex-col gap-4">
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
				<div className="flex flex-col">
					<span>Subtotal: €20.00</span>
					<span>Shipping: </span>
					<span>Grandtotal: </span>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
