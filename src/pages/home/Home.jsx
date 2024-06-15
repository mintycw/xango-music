import React, { useEffect, useState } from "react";
import banner from "../../assets/images/promotion-banner.png";
import Item from "../../components/Item";

function Home() {
	const [selectedCategory, setSelectedCategory] = useState("vinyls");

	return (
		<div className="overflow-x-hidden pt-24">
			<div>
				<img src={banner} className="w-full object-cover" />
			</div>
			<div className="flex w-full flex-col gap-3 py-5">
				<div className="flex w-full flex-col items-center justify-start gap-3">
					<span className="text-2xl font-bold">New Releases</span>
					<div className="flex flex-row">
						<button
							onClick={() => setSelectedCategory("vinyls")}
							className={`w-24 border-b-4 px-2 duration-300 hover:border-primary ${selectedCategory === "vinyls" ? "border-primary" : "border-base-200"}`}
						>
							Vinyls
						</button>
						<button
							onClick={() => setSelectedCategory("records")}
							className={`w-24 border-b-4 px-2 duration-300 hover:border-primary ${selectedCategory === "records" ? "border-primary" : "border-base-200"}`}
						>
							Records
						</button>
					</div>
				</div>
				<div className="z-0 px-8 md:px-32">
					<div className="carousel carousel-center max-w-full space-x-4">
						{Array(10)
							.fill()
							.map((_, index) => (
								<Item
									key={index}
									index={index}
									vinyl={
										selectedCategory === "vinyls"
											? true
											: false
									}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
