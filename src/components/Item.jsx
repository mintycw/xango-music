import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

function Item({
	index,
	artist,
	title,
	halfStars,
	totalReviews,
	price,
	image,
	type,
	region,
	info,
	label,
	year,
	mainstyle,
	tracks
}) {
	const [onHover, setOnHover] = useState(false);

	return (
		<Link
			to={`/products/${title}`}
			state={{
				title,
				artist,
				title,
				halfStars,
				totalReviews,
				price,
				image,
				type,
				region,
				info,
				label,
				year,
				mainstyle,
				tracks
			}}
			className="align carousel-item relative z-10 flex w-40 flex-col md:w-52 lg:w-60"
		>
			<div
				onMouseEnter={() => setOnHover(true)}
				onMouseLeave={() => setOnHover(false)}
				className="relative"
			>
				<img
					className="z-0 object-cover md:size-52 lg:size-60"
					src={image}
					alt="Product"
				/>
				<button
					className={`group absolute bottom-2 right-2 z-10 flex h-11 w-36 flex-row items-center justify-center rounded-sm bg-background p-1.5 transition-all duration-300 md:w-11 md:hover:w-36 ${
						onHover ? "opacity-100" : "opacity-100 md:opacity-0"
					}`}
				>
					<span className="w-24 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 md:w-0 md:group-hover:w-24">
						Add to basket
					</span>
					<FaShoppingBasket className="size-8 shrink-0" />
				</button>
			</div>

			<div className="flex flex-col items-start justify-start gap-2">
				<div>
					<span className="text-base font-bold">{title}</span> -{" "}
					<span className="text-sm">{artist}</span>
				</div>
				<div className="flex w-full flex-col gap-2 md:flex-row md:items-center">
					<div className="rating rating-half rating-md">
						{[...Array(10)].map((_, i) => (
							<input
								key={i}
								type="radio"
								name={`rating-${index}`}
								disabled
								checked={i === halfStars - 1}
								className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
							/>
						))}
					</div>
					<span className="text-sm text-gray-400">
						{totalReviews} reviews
					</span>
				</div>
				<div className="text-sm">{price}</div>
			</div>
		</Link>
	);
}

export default Item;
