import { type FC } from "react";
import rightArrow from "@/assets/svg/arrow-right.svg";
import { getURLStaticFile } from "@/utils";

export type inspirationCardType = {
	name: string;
	fullName: string;
	bgAddress: string;
};
const InspirationCard: FC<{ card: inspirationCardType }> = ({ card }) => {
	return (
		<div
			className="  bg-no-repeat bg-center bg-cover h-[72vh] aspect-0.69 w-md relative inline-block"
			style={{ background: getURLStaticFile(card.bgAddress) }}
		>
			<div className="absolute bottom-6 left-6 flex items-end">
				<div className=" bg-white/55 text-left p-8">
					{card.fullName}
					<h3 className="font-semibold text-3xl">{card.name}</h3>
				</div>
				<button className="flex items-center justify-center h-12 w-16 bg-[#B88E2F]">
					<img
						src={rightArrow}
						alt="rightArrow"
						className="w-1/2"
						// className="absolute bottom-6 right-6 w-8"
					/>
				</button>
			</div>
		</div>
	);
};

export default InspirationCard;
