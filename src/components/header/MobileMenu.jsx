import React from "react";
import { IoSearch, IoCart, IoClose } from "react-icons/io5";
import CatelogueItem from "./CatelogueItem";
import { Link } from "react-router-dom";

function MobileMenu({
	showMenu,
	setShowMenu,
	categories,
	xangoLogo,
	showCategories,
	setShowCategories,
	showViewAll,
	setShowViewAll,
	searchValue,
	setSearchValue
}) {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-16 overflow-y-auto bg-base-200 px-10 py-4 md:hidden">
			<div className="flex w-full items-center justify-between">
				<img src={xangoLogo} className="size-20 shrink-0" alt="Logo" />
				<button
					onClick={() => setShowMenu(false)}
					className="duration-300 hover:rotate-90"
				>
					<IoClose className="size-10" />
				</button>
			</div>
			<div className="flex flex-row gap-4">
				<div className="relative flex h-10 w-full">
					<input
						onChange={(e) => setSearchValue(e.target.value)}
						value={searchValue}
						className="relative h-10 w-full rounded-full border bg-transparent pl-2 pr-9 transition-all duration-300"
						placeholder="Search..."
					/>
					<IoSearch className="text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 transform" />
				</div>
				<div className="w-7 shrink-0">
					<button className="flex size-10 items-center justify-center rounded-full border shadow-lg duration-300 hover:bg-base-300 hover:shadow-2xl">
						<IoCart className="size-7" />
					</button>
				</div>
			</div>
			<div className="flex w-full flex-col">
				<div className="flex h-16 w-full items-center justify-between">
					<span className="flex h-full w-full flex-row items-center text-xl hover:underline">
						Catalogue
					</span>
					<button
						onClick={() => setShowCategories(!showCategories)}
						className="flex w-7 items-center justify-center"
					>
						<IoClose
							className={`size-6 duration-300 rotate-${showCategories ? "0" : "45"}`}
						/>
					</button>
				</div>
				{/* Animated dropdown content */}
				<div
					className={`overflow-hidden transition-all duration-300 ${showCategories ? "max-h-full" : "max-h-0"}`}
				>
					<div className="h-fit cursor-pointer rounded">
						<div className="flex w-full items-center justify-between">
							<span className="flex h-10 w-full flex-row items-center text-sm hover:underline">
								View all
							</span>
							<button
								onClick={() => setShowViewAll(!showViewAll)}
								className="flex w-7 items-center justify-center"
							>
								<IoClose
									className={`size-5 duration-300 rotate-${showViewAll ? "0" : "45"}`}
								/>
							</button>
						</div>
						<ul
							className={`ml-2 flex-col gap-2 overflow-hidden border-l transition-all duration-300 ${showViewAll ? "max-h-full px-4 py-2" : "max-h-0"} `}
						>
							<li className="text-sm hover:underline">
								<Link className="hover:underline">Records</Link>
							</li>
							<li className="text-sm hover:underline">
								<Link className="hover:underline">Vinyls</Link>
							</li>
						</ul>
					</div>
					{/* Mobile catalogue items */}
					{Object.entries(categories).map((category) => (
						<CatelogueItem
							key={category[0]}
							category={category[0]}
							subcategories={category[1]}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
