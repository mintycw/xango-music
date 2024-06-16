import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import itemsData from "../../database/items.json";
import Filter from "./Filter";

function Catalogue() {
	const [filteredItems, setFilteredItems] = useState(itemsData);

	return (
		<div className="flex w-screen flex-row pt-24">
			<Filter items={itemsData} setFilteredItems={setFilteredItems} />
			<div className="w-full p-4">
				<div className="flex w-full items-start justify-center">
					<div className="flex flex-wrap justify-center gap-4">
						{filteredItems.map((item, index) => (
							<Item
								key={item.title}
								index={index}
								vinyl={item.type === "Vinyl"}
								{...item}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalogue;
