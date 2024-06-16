import React from "react";

function News() {
	return (
		<div className="pt-24">
			<h1 className="text-center text-5xl font-bold">Latest News</h1>
			<div className="flex flex-wrap p-4">
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
				<div className="flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<h3 className="text-3xl font-bold">Title Post</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis vel dolor cumque aspernatur iste expedita
						neque, accusamus sit earum. Maiores quis deserunt
						explicabo consequuntur commodi. Reprehenderit hic
						suscipit incidunt voluptates.
					</p>
				</div>
			</div>
			<h2 className="text-center text-3xl font-bold">Latest Reviews</h2>
			<div className="carousel carousel-center max-w-full space-x-4 p-4">
				<div className="carousel-item flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<input
						type="text"
						placeholder="Product Name"
						className="input input-bordered w-full max-w-lg"
					/>
					<div className="flex items-center">
						<span>Rate the Product</span>
						<div className="rating rating-half rating-md">
							<input
								type="radio"
								name={`review-rating-example}`}
								className="rating-hidden"
							/>
							{[...Array(10)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name={`review-rating-example`}
									className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
								/>
							))}
						</div>
					</div>
					<textarea
						className="textarea textarea-bordered h-24"
						placeholder="Review"
					></textarea>
					<button className="h-14 w-full rounded-md bg-primary text-background">
						Submit
					</button>
				</div>
				<div className="carousel-item flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<div className="flex flex-row items-center justify-between">
						<h3 className="text-lg font-bold">Product Name</h3>
						<div className="rating rating-half rating-md">
							{[...Array(10)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name={`example-rating-${i}4`}
									disabled
									checked={i === 2}
									className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
								/>
							))}
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam dolore aspernatur dignissimos vel voluptas
						eaque iure ad. Eligendi voluptatem temporibus magnam
						maxime odio illum obcaecati ipsa architecto, excepturi,
						ullam quia.
					</p>
				</div>
				<div className="carousel-item flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<div className="flex flex-row items-center justify-between">
						<h3 className="text-lg font-bold">Product Name</h3>
						<div className="rating rating-half rating-md">
							{[...Array(10)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name={`example-rating-${i}3`}
									disabled
									checked={i === 1}
									className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
								/>
							))}
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam dolore aspernatur dignissimos vel voluptas
						eaque iure ad. Eligendi voluptatem temporibus magnam
						maxime odio illum obcaecati ipsa architecto, excepturi,
						ullam quia.
					</p>
				</div>
				<div className="carousel-item flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<div className="flex flex-row items-center justify-between">
						<h3 className="text-lg font-bold">Product Name</h3>
						<div className="rating rating-half rating-md">
							{[...Array(10)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name={`example-rating-${i}2`}
									disabled
									checked={i === 6}
									className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
								/>
							))}
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam dolore aspernatur dignissimos vel voluptas
						eaque iure ad. Eligendi voluptatem temporibus magnam
						maxime odio illum obcaecati ipsa architecto, excepturi,
						ullam quia.
					</p>
				</div>
				<div className="carousel-item flex w-full flex-col gap-2 rounded-lg p-4 shadow-lg duration-300 hover:shadow-2xl md:w-1/2 lg:w-1/3">
					<div className="flex flex-row items-center justify-between">
						<h3 className="text-lg font-bold">Product Name</h3>
						<div className="rating rating-half rating-md">
							{[...Array(10)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name={`example-rating-${i}1`}
									disabled
									checked={i === 8}
									className={`mask mask-half-${i % 2 === 0 ? "1" : "2"} mask-star-2 bg-primary`}
								/>
							))}
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam dolore aspernatur dignissimos vel voluptas
						eaque iure ad. Eligendi voluptatem temporibus magnam
						maxime odio illum obcaecati ipsa architecto, excepturi,
						ullam quia.
					</p>
				</div>
			</div>
		</div>
	);
}

export default News;
