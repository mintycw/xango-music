import React from "react";
import logo from "../../assets/images/xango-logo.png";

function Contact() {
	return (
		<div className="pt-24">
			<div className="flex flex-col items-center gap-4 bg-accent p-4 px-10 md:px-20">
				{/* Container for the consistent width */}
				<div className="flex w-full max-w-screen-lg flex-col gap-10">
					<div className="flex flex-row items-center justify-center gap-8 md:gap-20">
						<img src={logo} alt="Contact" className="size-40" />
						<div className="flex flex-col items-end">
							<span className="text-end text-2xl font-bold text-red-700">
								Xango Music
							</span>
							<span className="text-end text-lg text-red-700">
								Local music from all over the world
							</span>
						</div>
					</div>
					<div className="flex flex-col items-center gap-8 md:flex-row">
						<div className="flex-1">
							<span className="text-lg font-bold text-red-700">
								How it started
							</span>
							<p className="text-base">
								Founder and owner of the first hour, Arnulf den
								Boesterd, started Xango Music as a hobby that
								got out of hand. His love of music made him
								decide to regulate his hobby into Xango Music.
								Besides enjoying culture, travelling, good food
								and drinks, Arnulf is fulltime busy in the music
								business, trying to make the unavailable
								available! Xango Music is now distributing
								Vinyl, CD's and DVD's in the Benelux countries
								and runs an internet shop worldwide, to give all
								those great artists a platform. There is so much
								beautiful music out there, that needs to be
								heard!
							</p>
						</div>
						<img
							src="https://www.xangomusic.com/img/anrulf-2.jpg"
							className="size-80 rounded-full"
						/>
					</div>
					<div className="flex flex-col items-center gap-8 md:flex-row-reverse">
						<div className="flex-1">
							<span className="text-lg font-bold text-red-700">
								Our location and team:
							</span>
							<p className="text-base">
								Founder and owner of the first hour, Arnulf den
								Boesterd, started Xango Music as a hobby that
								got out of hand. His love of music made him
								decide to regulate his hobby into Xango Music.
								Besides enjoying culture, travelling, good food
								and drinks, Arnulf is fulltime busy in the music
								business, trying to make the unavailable
								available! Xango Music is now distributing
								Vinyl, CD's and DVD's in the Benelux countries
								and runs an internet shop worldwide, to give all
								those great artists a platform. There is so much
								beautiful music out there, that needs to be
								heard!
							</p>
						</div>
						<img
							src="https://www.xangomusic.com/img/warehouse2.jpg"
							className="h-40 rounded-md object-cover"
						/>
					</div>
					<div className="flex flex-col items-center gap-8 md:flex-row-reverse">
						<div className="flex-1">
							<span className="text-lg font-bold text-red-700">
								What is Xango?
							</span>
							<p className="text-base">
								Xango is a god, an Orisha: he originates from
								the religion of the Westafrican Yoruba people.
								When the Yoruba were taken across the ocean to
								the Caribbean and Brazil, Xango accompanied
								them. You'll meet him in cuban santeria and
								brazilian candomble. He symbolises thunder and
								lightning. Xangó is very flamboyant and a great
								warrior, lover, drummer and dancer. He
								represents music in many ways... We decided to
								celebrate the richness of the world's music by
								using Xangó's name (pronounced: "shan-gó").
								heard!
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<div className="flex flex-1 flex-col gap-4">
							<span className="text-lg font-bold text-red-700">
								Contact Information:
							</span>
							<div className="flex flex-col gap-4 md:flex-row">
								<div className="flex flex-col gap-2">
									<span className="font-bold text-red-700">
										Xango Music
									</span>{" "}
									<span>
										Office:{" "}
										<span className="font-bold">
											{" "}
											Singelstraat 1, 3513 BL Utrecht, NL
										</span>
									</span>
									<span>
										Warehouse:
										<span className="font-bold">
											{" "}
											Berenkoog 53C 1822 BN Alkmaar, NL
										</span>
									</span>
									<span>
										Email:{" "}
										<span className="font-bold">
											info@xangomusic.com
										</span>
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-bold text-red-700">
										Arnulf den Boesterd:
									</span>
									<span>
										Email:{" "}
										<span className="font-bold">
											arnulf@xangomusic.com
										</span>
									</span>
									<span>
										Tel:{" "}
										<span className="font-bold">
											+31 (0)6 26 02 63 60
										</span>
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-bold text-red-700">
										Company information
									</span>
									<span>
										Company trade name:{" "}
										<span className="font-bold">
											Xango World Music Records
										</span>
									</span>
									<span>
										Chamber of Commerce Utrecht:{" "}
										<span className="font-bold">
											30.131.836
										</span>
									</span>
									<span>
										VAT:{" "}
										<span className="font-bold">
											NL805889255B01
										</span>
									</span>
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 bg-secondary p-4 px-10 md:px-20">
				<span className="text-xl font-bold text-red-700">
					Contact us!
				</span>
				<div className="flex w-full flex-col items-center gap-2">
					<input
						type="text"
						placeholder="Name"
						className="input input-bordered w-full max-w-lg"
					/>
					<input
						type="text"
						placeholder="Email"
						className="input input-bordered w-full max-w-lg"
					/>
					<input
						type="text"
						placeholder="Subject"
						className="input input-bordered w-full max-w-lg"
					/>
					<textarea
						className="textarea textarea-bordered h-40 w-full max-w-lg"
						placeholder="Message"
					></textarea>
					<button className="btn btn-primary w-full max-w-lg">
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
