import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CatalogueItem({ category, subcategories }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div
			onMouseOver={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
			className="h-fit rounded p-2 shadow-lg"
		>
			<h2 className="hover:underline">
				<Link>{category}</Link>
			</h2>
			{showMenu && (
				<ul className="bg-base-200 top-full flex-col gap-2 rounded px-4 py-2 shadow-lg">
					{subcategories.map((subcategory) => (
						<li key={subcategory} className="hover:underline">
							<Link>{subcategory}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default CatalogueItem;
