import React, { useEffect, useState } from "react";
import placeholderImage from "../../assets/images/placeholderImage.png";

function CartItem() {
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		if (amount == "") {
			setAmount(1);
		}
	}, [amount]);

	function incrementAmount() {
		setAmount(amount + 1);
	}

	function decrementAmount() {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	}

	return (
		<div className="flex w-full flex-row gap-4">
			<div className="size-28 shrink-0">
				<img src={placeholderImage} className="shrink-0 object-cover" />
			</div>
			<div className="flex w-full flex-col justify-between">
				<span className="text-base font-bold">Anarouz (LP)</span>
				<span className="text-sm">
					3MA - Ballake Sissoko, Driss El Maloumi & Rajery
				</span>
				<div className="flex flex-row gap-4">
					<div className="relative h-7">
						<button
							onClick={() => decrementAmount()}
							className="absolute left-0 size-7"
						>
							-
						</button>
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="h-full w-20 border px-7 text-center text-xs"
						/>
						<button
							onClick={() => incrementAmount()}
							className="absolute right-0 size-7"
						>
							+
						</button>
					</div>
					<button className="text-sm text-primary hover:underline">
						Remove
					</button>
				</div>
			</div>
			<div className="flex w-min flex-col text-base">
				<span>€20.00</span>
			</div>
		</div>
	);
}

export default CartItem;
