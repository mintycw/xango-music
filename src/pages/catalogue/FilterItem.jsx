import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

function FilterItem({ filter, index, onFilterChange, isSortBy }) {
	const [showFilters, setShowFilters] = useState(false);
	const [inputType, setInputType] = useState("checkbox");

	useEffect(() => {
		if (isSortBy) {
			setInputType("radio");
		}
	}, [isSortBy]);

	const handleChange = (item) => {
		onFilterChange(isSortBy ? item : filter[0].toLowerCase(), item);
		console.log(isSortBy ? item : filter[0].toLowerCase(), item);
	};

	return (
		<>
			<div className="flex w-full flex-col">
				<div className="flex h-16 w-full items-center justify-between">
					<span className="flex h-full w-full flex-row items-center text-xl">
						{filter[0]}
					</span>
					<button
						onClick={() => setShowFilters(!showFilters)}
						className="flex w-7 items-center justify-center"
					>
						<IoClose
							className={`size-6 duration-300 rotate-${showFilters ? "0" : "45"}`}
						/>
					</button>
				</div>
			</div>
			<div
				className={`mx-4 overflow-hidden border-l border-primary px-2 transition-all duration-300 ${showFilters ? "max-h-full" : "max-h-0"}`}
			>
				{filter[1].map((item) => (
					<div className="form-control" key={item}>
						<label className="label cursor-pointer">
							<span className="label-text">{item}</span>
							<input
								id={`${filter[0]} - ${item}`}
								type={inputType}
								name={`${inputType}-${index}`}
								onChange={() => handleChange(item)}
								className={`${inputType} checked:bg-primary`}
							/>
						</label>
					</div>
				))}
			</div>
		</>
	);
}

export default FilterItem;
