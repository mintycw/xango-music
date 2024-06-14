import React from "react";
import { FacebookProvider, Page } from "react-facebook";
function FacebookEmbed() {
	return (
		<FacebookProvider appId="test" className="mx-auto w-full">
			<div className="sm:hidden">
				<Page
					href="https://www.facebook.com/XangoMusic"
					tabs="timeline"
					width={250}
					height={500}
					hideCover={false}
					showFacepile={true}
					smallHeader={false}
					adaptContainerWidth={true}
				/>
			</div>
			<div className="hidden sm:block md:hidden">
				<Page
					href="https://www.facebook.com/XangoMusic"
					tabs="timeline"
					width={450}
					height={500}
					hideCover={false}
					showFacepile={true}
					smallHeader={false}
					adaptContainerWidth={true}
				/>
			</div>
			<div className="hidden md:block lg:hidden">
				<Page
					href="https://www.facebook.com/XangoMusic"
					tabs="timeline"
					width={200}
					height={500}
					hideCover={false}
					showFacepile={true}
					smallHeader={false}
					adaptContainerWidth={true}
				/>
			</div>
			<div className="hidden lg:block xl:hidden">
				<Page
					href="https://www.facebook.com/XangoMusic"
					tabs="timeline"
					width={350}
					height={500}
					hideCover={false}
					showFacepile={true}
					smallHeader={false}
					adaptContainerWidth={true}
				/>
			</div>
			<div className="hidden xl:block">
				<Page
					href="https://www.facebook.com/XangoMusic"
					tabs="timeline"
					width={500}
					height={500}
					hideCover={false}
					showFacepile={true}
					smallHeader={false}
					adaptContainerWidth={true}
				/>
			</div>
		</FacebookProvider>
	);
}

export default FacebookEmbed;
