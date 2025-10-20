import { useState, type FC } from "react";
import type { inspirationCardType } from "./InspirationCard";
// import InspirationCard from "./InspirationCard";
import rightArrow from "@/assets/svg/arrow-right.svg";
import { getURLStaticFile } from "@/utils";
import CarouselButton from "./buttons/CarouselButton";
// import { gsap, useGsap } from "@/GsapConfig";

const Carousel: FC<{ list: inspirationCardType[]; className?: string }> = ({
	list,
	className,
}) => {
	const [currentImg, setCurrentImg] = useState(0);

	return (
		<div className={className}>
			<div className="w-2xl flex items-center justify-between">
				<CarouselButton
					currentImg={currentImg}
					setCurrentImg={setCurrentImg}
					next={false}
					length={list.length}
				/>

				<div
					style={
						{
							"--image-url": `url(${getURLStaticFile(
								list[currentImg].bgAddress
							)})`,
						} as React.CSSProperties
					}
					className={`bg-[image:var(--image-url)]
					)})] bg-no-repeat bg-center bg-cover h-[72vh] aspect-0.69 w-md relative inline-block`}
				>
					<div className="absolute bottom-6 left-6 flex items-end">
						<div className=" bg-white/55 text-left p-8">
							{list[currentImg].fullName}
							<h3 className="font-semibold text-3xl">
								{list[currentImg].name}
							</h3>
						</div>
						<button className="flex items-center justify-center h-12 w-16 bg-[#B88E2F]">
							<img src={rightArrow} alt="rightArrow" className="w-1/2" />
						</button>
					</div>
				</div>
				<CarouselButton
					currentImg={currentImg}
					setCurrentImg={setCurrentImg}
					length={list.length}
				/>
			</div>
		</div>
	);
};

const InspirationList: FC<{ list: inspirationCardType[] }> = ({ list }) => {
	// const [];
	return (
		<div className="h-[80vh]  bg-[#FCF8F3] flex items-center justify-around px-6">
			<div className="w-1/2 inline-block">
				<h3 className="font-bold text-4xl">50+ Beautiful rooms inspiration</h3>
				<p>
					Our designer already made a lot of beautiful prototype of rooms that
					inspire you
				</p>
				<button className="bg-[#B88E2F] text-white px-9 py-3">
					Explore more
				</button>
			</div>
			<Carousel list={list} className="w-1/2 flex justify-between" />
		</div>
	);
};

export default InspirationList;
