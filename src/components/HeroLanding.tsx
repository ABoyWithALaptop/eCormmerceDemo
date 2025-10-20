import { type FC } from "react";

const HeroLanding: FC = () => {
	return (
		<div className="bg-[url(assets/heroLandingBG.png)]  bg-no-repeat bg-center bg-cover h-dvh">
			<div
				className="bg-[#FFF3E3] absolute w-2xl pt-16 pb-10 px-10 
			md:top-60 lg:top-70 top-36
			xl:right-30 2xl:right-90 right-14 
			flex flex-col gap-4"
			>
				<h2 className="font-semibold">New Arrival</h2>
				<h1 className="font-bold text-[#B88E2F] text-6xl ">
					Discover Our
					<br />
					New Collection
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
					corrupti labore dolore dolor hic qui iure sed animi quam blanditiis,
					voluptate, eos delectus quos totam tenetur est, expedita quo nihil.
				</p>
				<button className="bg-[#B88E2F] text-white px-4 py-4 font-semibold text-sm w-1/3">
					BUY NOW
				</button>
			</div>
		</div>
	);
};

export default HeroLanding;
