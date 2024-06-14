import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function CatelogueItem({ category, subcategories }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="h-fit cursor-pointer rounded">
			<div
				onClick={() => setShowMenu(!showMenu)}
				className="flex w-full items-center justify-between"
			>
				{/* Category label */}
				<span className="flex h-10 w-full flex-row items-center text-sm hover:underline md:text-base">
					{category}
				</span>
				{/* Close button */}
				<button className="flex w-7 items-center justify-center">
					<IoClose
						className={`size-5 transform duration-300 ${
							showMenu ? "rotate-0" : "rotate-45"
						}`}
					/>
				</button>
			</div>
			{/* Subcategory menu */}
			<ul
				className={`ml-2 flex-col gap-2 overflow-hidden border-l transition-all duration-300 ${
					showMenu ? "max-h-full px-4 py-2" : "max-h-0 px-4 py-0"
				}`}
			>
				{subcategories.map((subcategory, index) => (
					<li
						key={index}
						className={`text-sm hover:underline md:text-base ${showMenu ? "block" : "hidden"}`}
					>
						<Link to="#">{subcategory}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CatelogueItem;
