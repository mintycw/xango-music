import React, { useEffect, useState } from "react";
import CatelogueItem from "./CatelogueItem";
import categories from "../../database/catalogue-categories.json";
import xangoLogo from "../../assets/images/xango-logo.png";
import { IoSearch, IoMenu, IoCart, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Cart from "../cart/Cart";

function Header() {
	const [enableSearch, setEnableSearch] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [showMenu, setShowMenu] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [showCategories, setShowCategories] = useState(false);
	const [showViewAll, setShowViewAll] = useState(false);

	useEffect(() => {
		console.log(showMenu, showCart);
		if (showMenu || showCart) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
		}
	}, [showMenu, showCart]);

	return (
		<>
			<nav className="fixed z-50 grid h-24 w-full grid-cols-2 items-center bg-base-200 px-12 md:grid-cols-3">
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
					<Link to="/news" className="h-full hover:underline">
						News
					</Link>
					{/* Catalogue dropdown */}
					<div className="group relative">
						<Link
							to="/catalogue"
							className="h-full duration-300 hover:text-primary hover:underline"
						>
							Catalogue
						</Link>
						<div className="absolute left-1/2 top-full z-50 hidden max-h-[70vh] w-[70vw] -translate-x-1/2 transform grid-cols-3 gap-4 overflow-y-auto rounded bg-base-200 p-4 text-start shadow-md duration-100 group-hover:grid xl:grid-cols-4">
							<div className="h-fit cursor-pointer rounded">
								<div className="flex w-full items-center justify-between">
									<Link
										to="/catalogue/all"
										className="flex h-10 w-full flex-row items-center text-sm hover:underline md:text-base"
									>
										View all
									</Link>
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
									className={`ml-2 flex-col gap-2 overflow-hidden border-l border-primary transition-all duration-300 ${showViewAll ? "max-h-full px-4 py-2" : "max-h-0"} `}
								>
									<li className="text-sm hover:underline md:text-base">
										<Link
											to="/catalogue/records"
											className="hover:underline"
										>
											Records
										</Link>
									</li>
									<li className="text-sm hover:underline md:text-base">
										<Link
											to="/catalogue/vinyls"
											className="hover:underline"
										>
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
						<Link
							to="/catalogue/new"
							className="h-full hover:underline"
						>
							New Releases
						</Link>
						<div className="absolute left-1/2 top-full z-50 hidden max-h-[70vh] w-min -translate-x-1/2 transform flex-col gap-4 overflow-y-auto rounded bg-base-200 p-4 text-start shadow-md duration-100 group-hover:flex">
							<div className="top-full flex-col gap-2 rounded bg-base-200 px-4 py-2 shadow-lg">
								<Link
									to="/catalogue/new/records"
									className="hover:underline"
								>
									Records
								</Link>
							</div>
							<div className="top-full flex-col gap-2 rounded bg-base-200 px-4 py-2 shadow-lg">
								<Link
									to="/catalogue/new/vinyls"
									className="hover:underline"
								>
									Vinyls
								</Link>
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
							className={`relative h-10 rounded-full border bg-transparent px-2 transition-all duration-300 ${!enableSearch ? "w-10 shadow-lg hover:bg-base-300 hover:shadow-2xl" : "w-60 pr-9"}`}
						/>
						<IoSearch
							className={`absolute top-1/2 size-7 -translate-y-1/2 ${!enableSearch ? "right-1/2 translate-x-1/2 delay-[240ms]" : "right-2 translate-x-0"}`}
						/>
					</label>
					{/* Cart button */}
					<div>
						<button
							onClick={() => setShowCart(!showCart)}
							className="flex size-10 items-center justify-center rounded-full border shadow-lg duration-300 hover:bg-base-300 hover:shadow-2xl"
						>
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
				<MobileMenu
					xangoLogo={xangoLogo}
					setShowMenu={setShowMenu}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					showCategories={showCategories}
					setShowCategories={setShowCategories}
					showViewAll={showViewAll}
					setShowViewAll={setShowViewAll}
					categories={categories}
					setShowCart={setShowCart}
				/>
			)}
			{showCart && <Cart setShowCart={setShowCart} />}
		</>
	);
}

export default Header;
