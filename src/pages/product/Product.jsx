import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Product() {
	const { state } = useLocation();
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
		<div className="pt-24">
			<div className="flex flex-col items-center gap-4 p-4 px-10 md:px-20">
				{/* Container for the consistent width */}
				<div className="flex w-full max-w-screen-lg flex-col gap-10">
					{/* First section */}
					<div className="items-center gap-10 md:flex">
						<div className="flex items-center justify-center">
							<img
								src={state.image}
								className="max-w-[300px] lg:max-w-[500px] xl:max-w-[700px]"
							/>
						</div>
						<div className="flex w-full flex-col gap-10">
							<div className="flex w-full flex-col items-start justify-center">
								<h1 className="text-3xl">{state.title}</h1>
								<h2 className="text-xl">{state.artist}</h2>
								<h3>{state.price}</h3>
							</div>
							<div className="flex h-full w-full flex-col gap-4">
								<div className="relative h-10 w-fit">
									<button
										onClick={() => decrementAmount()}
										className="absolute left-0 size-10"
									>
										-
									</button>
									<input
										type="number"
										value={amount}
										onChange={(e) =>
											setAmount(e.target.value)
										}
										className="h-full w-28 border px-7 text-center text-xs"
									/>
									<button
										onClick={() => incrementAmount()}
										className="absolute right-0 size-10"
									>
										+
									</button>
								</div>
								<button className="h-14 w-full bg-primary text-background">
									Add To Cart
								</button>
							</div>
						</div>
					</div>

					{/* Second section */}
					<div className="flex flex-col gap-4 md:gap-10">
						<div className="flex flex-col gap-2">
							<span>Region: {state.region}</span>
							<span>Mainstyle: {state.mainstyle}</span>
							<span>Type: {state.type}</span>
							<span>Release year: {state.year}</span>
						</div>
						<p>{state.info}</p>
						<span>Tracks</span>
						<ol className="flex list-decimal flex-col px-10">
							{Object.values(state.tracks).map((track, index) => (
								<li key={index} className="list-item flex-row">
									{track.title}{" "}
									{track.duration && track.duration}
								</li>
							))}
						</ol>
					</div>

					<div className="flex w-full flex-col gap-4">
						<h3>Reviews</h3>
						<div className="flex flex-row items-center gap-2">
							<div className="rating rating-half rating-md">
								{[...Array(5)].map((_, i) => (
									<input
										key={i}
										type="radio"
										name={`rating-${state.title}`}
										disabled
										checked={i === state.halfStars - 1}
										className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
									/>
								))}
							</div>
							<span className="text-sm">
								Total reviews: {state.totalReviews}
							</span>
						</div>
						<div className="flex w-full flex-col gap-4">
							<div className="flex items-center">
								<span>Rate the Product</span>
								<div className="rating rating-half rating-md">
									<input
										type="radio"
										name={`review-rating-${state.title}`}
										className="rating-hidden"
									/>
									{[...Array(5)].map((_, i) => (
										<input
											key={i}
											type="radio"
											name={`review-rating-${state.title}`}
											className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
										/>
									))}
								</div>
							</div>
							<label className="form-control">
								<div className="label">
									<span className="label-text">
										Write a review
									</span>
								</div>
								<textarea
									className="textarea textarea-bordered h-24"
									placeholder="Review"
								></textarea>
							</label>
							<button className="h-14 w-full bg-primary text-background">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
