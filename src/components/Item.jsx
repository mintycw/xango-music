import React, { useState } from "react";
import placeholderImage from "../assets/images/placeholderImage.png";
import placeholderImage2 from "../assets/images/placeholderImage2.png";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

function Item({ index, vinyl }) {
	const [onHover, setOnHover] = useState(false);

	return (
		<Link className="carousel-item relative z-10 flex w-60 flex-col">
			<div
				onMouseEnter={() => setOnHover(true)}
				onMouseLeave={() => setOnHover(false)}
				className="relative"
			>
				<img
					className="z-0 size-60 object-cover"
					src={vinyl ? placeholderImage : placeholderImage2}
					alt="Product"
				/>
				<button
					className={`group absolute bottom-2 right-2 z-10 flex h-11 w-11 flex-row items-center justify-center rounded-sm bg-background p-1.5 transition-all duration-300 hover:w-36 ${onHover ? "opacity-100" : "opacity-0"}`}
				>
					<span className="w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:w-24">
						Add to basket
					</span>
					<FaShoppingBasket className="size-8 shrink-0" />
				</button>
			</div>

			<div className="flex flex-col items-start justify-start gap-2">
				<div>
					<span className="text-base font-bold">
						{vinyl ? "Anarouz (LP)" : "Phantom Songs"}
					</span>{" "}
					-{" "}
					<span className="text-sm">
						{vinyl
							? "3MA - Ballake Sissoko, Driss El Maloumi & Rajery"
							: "17 Hippies"}
					</span>
				</div>
				<div className="flex w-full flex-row items-center gap-2">
					<div className="rating rating-half rating-md">
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-1 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-2 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-1 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-2 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-1 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-2 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-1 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-2 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							checked
							disabled
							className="mask mask-half-1 mask-star-2 bg-primary"
						/>
						<input
							type="radio"
							name={index + "rating-10"}
							disabled
							className="mask mask-half-2 mask-star-2 bg-primary"
						/>
					</div>
					<span className="text-gray-400 text-sm">20 reviews</span>
				</div>
				<div className="text-sm">{vinyl ? "€20.00" : "€16.50"}</div>
			</div>
		</Link>
	);
}

export default Item;
