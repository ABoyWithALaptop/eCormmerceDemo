import { type FC } from "react";

type productSegmentType = {
	name: string;
	segment: string;
};

const RangeProductSection: FC<{ segmentList: productSegmentType[] }> = ({
	segmentList,
}) => {
	return (
		<div>
			<h3 className="font-bold text-3xl">Browse The Range</h3>
			<sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sub>
			<ul className="flex items-center align-middle justify-center gap-2 pt-16">
				{segmentList.map((segment) => (
					<li
						className="flex flex-col gap-8 items-center"
						key={segment.segment}
					>
						<img
							src={`src/assets/segmentProduct/${segment.segment}.jpg`}
							className="rounded-xl"
							alt={segment.name}
						/>
						<h4 className="font-bold text-2xl">{segment.name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RangeProductSection;
