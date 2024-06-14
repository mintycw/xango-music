import React, { useState } from "react";
import CatelogueItem from "./CatelogueItem";
import categories from "../database/catalogue-categories.json";
import xangoLogo from "../assets/images/xango-logo.png";
import {
	IoSearch,
	IoMenu,
	IoCartOutline,
	IoCart,
	IoClose,
	IoPlus
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
	const [enableSearch, setEnableSearch] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [showMenu, setShowMenu] = useState(false);
	const [showCategories, setShowCategories] = useState(false);
	const [showViewAll, setShowViewAll] = useState(false);

	// Toggle body overflow based on showMenu state
	if (showMenu) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return (
		<>
			<nav className="bg-base-200 grid h-24 w-full grid-cols-2 items-center px-12 md:grid-cols-3">
				<div>
					<Link to="/">
						<img
							src={xangoLogo}
							className="size-20 shrink-0"
							alt="Logo"
						/>
					</Link>
				</div>
				<div className="relative hidden justify-center gap-6 md:flex">
					{/* Catalogue dropdown */}
					<div className="group relative">
						<span className="h-full hover:underline">
							Catalogue
						</span>
						<div className="bg-base-200 absolute left-1/2 top-6 z-[1] hidden h-min w-[70vw] -translate-x-1/2 transform grid-cols-3 gap-4 rounded p-4 text-start shadow-md duration-100 group-hover:grid xl:grid-cols-4">
							<div className="h-fit cursor-pointer rounded">
								<div className="flex w-full items-center justify-between">
									<span className="flex h-10 w-full flex-row items-center text-sm hover:underline md:text-base">
										View all
									</span>
									<button
										onClick={() =>
											setShowViewAll(!showViewAll)
										}
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
										<Link className="hover:underline">
											Records
										</Link>
									</li>
									<li className="text-sm hover:underline">
										<Link className="hover:underline">
											Vinyls
										</Link>
									</li>
								</ul>
							</div>
							{Object.entries(categories).map((category) => (
								<CatelogueItem
									key={category[0]}
									category={category[0]}
									subcategories={category[1]}
								/>
							))}
						</div>
					</div>
					{/* View all dropdown */}
					<div className="group relative">
						<span className="h-full">View all</span>
						<div className="bg-base-200 absolute left-1/2 top-6 z-[1] hidden h-min w-min -translate-x-1/2 transform flex-col gap-4 rounded p-4 text-start shadow-md duration-100 group-hover:flex">
							<div className="bg-base-200 top-full flex-col gap-2 rounded px-4 py-2 shadow-lg">
								<Link className="hover:underline">Records</Link>
							</div>
							<div className="bg-base-200 top-full flex-col gap-2 rounded px-4 py-2 shadow-lg">
								<Link className="hover:underline">Vinyls</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden justify-end gap-6 md:flex">
					{/* Search input */}
					<label
						className={`relative flex h-10 shrink-0 ${!enableSearch && "cursor-pointer"}`}
					>
						<input
							onFocus={() => setEnableSearch(true)}
							onBlur={() => setEnableSearch(false)}
							onChange={(e) => setSearchValue(e.target.value)}
							value={enableSearch ? searchValue : ""}
							className={`relative h-10 rounded-full border bg-transparent px-2 transition-all duration-300 ${!enableSearch ? "hover:bg-base-300 w-10 shadow-lg hover:shadow-2xl" : "w-60 pr-9"}`}
						/>
						<IoSearch
							className={`absolute top-1/2 size-7 -translate-y-1/2 ${!enableSearch ? "right-1/2 translate-x-1/2 delay-[240ms]" : "right-2 translate-x-0"}`}
						/>
					</label>
					{/* Cart button */}
					<div>
						<button className="hover:bg-base-300 flex size-10 items-center justify-center rounded-full border shadow-lg duration-300 hover:shadow-2xl">
							<IoCart className="size-7" />
						</button>
					</div>
				</div>
				{/* Mobile menu toggle */}
				<div className="place-self-center justify-self-end">
					<button
						onClick={() => setShowMenu(!showMenu)}
						className="block md:hidden"
					>
						<IoMenu className="size-10" />
					</button>
				</div>
			</nav>
			{/* Mobile menu */}
			{showMenu && (
				<div className="bg-base-200 fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-16 overflow-y-auto px-10 py-4 md:hidden">
					<div className="flex w-full items-center justify-between">
						<img
							src={xangoLogo}
							className="size-20 shrink-0"
							alt="Logo"
						/>
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
							<IoSearch className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
						</div>
						<div className="w-7 shrink-0">
							<button className="hover:bg-base-300 flex size-10 items-center justify-center rounded-full border shadow-lg duration-300 hover:shadow-2xl">
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
								onClick={() =>
									setShowCategories(!showCategories)
								}
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
										onClick={() =>
											setShowViewAll(!showViewAll)
										}
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
										<Link className="hover:underline">
											Records
										</Link>
									</li>
									<li className="text-sm hover:underline">
										<Link className="hover:underline">
											Vinyls
										</Link>
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
			)}
		</>
	);
}

export default Header;
