import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterItem from "./FilterItem";
import itemsData from "../../database/items.json";
import { IoFilter, IoClose } from "react-icons/io5";

// Utility function to extract unique filter options
function extractFilterOptions(items, key) {
	const options = items.map((item) => item[key]);
	return [...new Set(options)]; // Remove duplicates
}

// Utility function for sorting items
function sortItems(items, sortBy) {
	switch (sortBy) {
		case "price-asc":
			return items.sort(
				(a, b) =>
					parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
			);
		case "price-desc":
			return items.sort(
				(a, b) =>
					parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
			);
		case "rating":
			return items.sort((a, b) => b.stars - a.stars);
		default:
			return items;
	}
}

function Filter({ setFilteredItems }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [showFilter, setShowFilter] = useState(false);

	useEffect(() => {
		const filterCategory = searchParams.get("category");
		const filterValue = searchParams.get("value");
		const sortBy = searchParams.get("sort");

		let filtered = itemsData;

		if (filterCategory && filterValue) {
			filtered = itemsData.filter(
				(item) => item[filterCategory] === filterValue
			);
		}

		if (sortBy) {
			filtered = sortItems(filtered, sortBy);
		}

		setFilteredItems(filtered);
	}, [searchParams]);

	function handleFilterChange(filterCategory, filterValue) {
		searchParams.set("category", filterCategory);
		searchParams.set("value", filterValue);
		setSearchParams(searchParams);
	}

	function handleSortChange(sortValue) {
		searchParams.set("sort", sortValue);
		setSearchParams(searchParams);
	}

	// Generate filter options dynamically
	const genres = extractFilterOptions(itemsData, "genre");
	const types = extractFilterOptions(itemsData, "type");
	const mainstyle = extractFilterOptions(itemsData, "mainstyle");

	const filters = {
		"Sort by": ["price-asc", "price-desc", "rating"],
		Genre: genres,
		Type: types,
		"Main Style": mainstyle
	};

	return (
		<>
			<div className="hidden min-w-80 p-4 md:block">
				{Object.entries(filters).map((filter, index) => (
					<FilterItem
						key={filter[0]}
						filter={filter}
						index={index}
						onFilterChange={
							filter[0] === "Sort by"
								? handleSortChange
								: handleFilterChange
						}
						isSortBy={filter[0] === "Sort by"}
					/>
				))}
			</div>
			<button
				onClick={() => setShowFilter(!showFilter)}
				className="fixed right-32 top-7 z-50 md:hidden"
			>
				<IoFilter className="size-10" />
			</button>
			{showFilter && (
				<div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-16 overflow-y-auto bg-base-200 px-10 py-4 md:hidden">
					<div className="flex w-full justify-end">
						<button
							onClick={() => setShowFilter(false)}
							className="duration-300"
						>
							<IoClose className="size-10" />
						</button>
					</div>
					<div className="flex flex-col gap-4">
						{Object.entries(filters).map((filter, index) => (
							<FilterItem
								key={filter[0]}
								filter={filter}
								index={index}
								onFilterChange={
									filter[0] === "Sort by"
										? handleSortChange
										: handleFilterChange
								}
								isSortBy={filter[0] === "Sort by"}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default Filter;
