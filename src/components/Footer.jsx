import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FacebookProvider, Page } from "react-facebook";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaSoundcloud,
	FaLinkedin
} from "react-icons/fa";
import FacebookEmbed from "./FacebookEmbed";

function Footer() {
	return (
		<div className="bg-base-200 relative flex h-min min-h-[600px] w-screen flex-col justify-around px-5 pt-24 text-center md:h-min md:min-h-0 md:px-16 md:pb-14 md:pt-20 lg:px-32">
			<div className="flex h-full w-full flex-col justify-between gap-6 md:flex-row md:items-start md:gap-0">
				<div className="flex flex-col gap-6 md:mr-8">
					<span className="text-primary flex h-11 items-center justify-center whitespace-nowrap text-lg uppercase md:justify-start xl:text-2xl">
						Xango Music
					</span>
					<ul className="*:text-text md:text-start">
						<li>
							<Link
								target="_blank"
								to="http://www.xmd.nl/"
								title="B2B for stores in the Benelux & labels worldwide"
								className="hover:text-primary duration-75 hover:underline"
							>
								Distribution (XMD)
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								to="http://www.xangoma.eu/"
								title="News and information about music in general and about articles distributed by Xango Music"
								className="hover:text-primary duration-75 hover:underline"
							>
								Xangoma Magazine
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								to="https://www.xangomusic.com/mailafriend.php?ref=https%3A//www.xangomusic.com/intro.php"
								title="Share our website with a friend!"
								className="hover:text-primary duration-75 hover:underline"
							>
								Tell a friend!
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-6 md:mr-8">
					<span className="text-primary flex h-11 items-center justify-center uppercase md:justify-start">
						Information
					</span>
					<ul className="*:text-text md:text-start">
						<li>
							<Link
								target="_blank"
								to="http://www.xmd.nl/"
								title="B2B for stores in the Benelux & labels worldwide"
								className="hover:text-primary duration-75 hover:underline"
							>
								How to order?
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								to="http://www.xangoma.eu/"
								title="News and information about music in general and about articles distributed by Xango Music"
								className="hover:text-primary duration-75 hover:underline"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								to="https://www.xangomusic.com/mailafriend.php?ref=https%3A//www.xangomusic.com/intro.php"
								title="Share our website with a friend!"
								className="hover:text-primary duration-75 hover:underline"
							>
								Privacy policy
							</Link>
						</li>
					</ul>
				</div>
				<div className="relative mb-20 flex items-start justify-center bg-gray-100">
					<FacebookEmbed />
				</div>
				<div className="text-text items-top flex flex-col items-center justify-center gap-2 md:ml-8 md:flex-row md:items-start">
					<div className="flex gap-2 md:flex-col">
						<Link
							target="_blank"
							to="https://www.linkedin.com/in/arnulf-den-boesterd-13730231/"
							className="bg-primary flex size-10 items-center justify-center rounded-full duration-300 hover:brightness-50"
						>
							<FaLinkedin />
						</Link>
						<Link
							target="_blank"
							to="https://www.instagram.com/arnulfdenboesterd/"
							className="bg-primary flex size-10 items-center justify-center rounded-full duration-300 hover:brightness-50"
						>
							<FaInstagram />
						</Link>
					</div>
					<div className="flex gap-2 md:flex-col">
						<Link
							target="_blank"
							to="https://soundcloud.com/xango-music-distribution"
							className="bg-primary flex size-10 items-center justify-center rounded-full duration-300 hover:brightness-50"
						>
							<FaSoundcloud />
						</Link>
						<Link
							target="_blank"
							to="https://www.facebook.com/XangoMusic"
							className="bg-primary flex size-10 items-center justify-center rounded-full duration-300 hover:brightness-75"
						>
							<FaFacebookF />
						</Link>
						<Link
							target="_blank"
							to="https://x.com/XangoMusic"
							className="bg-primary flex size-10 items-center justify-center rounded-full duration-300 hover:brightness-50"
						>
							<FaTwitter />
						</Link>
					</div>
				</div>
			</div>
			<div className="border-text mb-8 mt-16 flex h-28 flex-col items-center justify-center border-t md:mb-0 md:mt-0 md:items-start">
				<div className="mt-8 flex shrink-0 flex-col overflow-y-hidden *:text-neutral-500 md:flex-row md:gap-2">
					<span>Copyright &copy; 2024</span>
					<span>Xango Music</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
