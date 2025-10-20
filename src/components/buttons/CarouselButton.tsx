import type { FC } from "react";

const CarouselButton: FC<{
	currentImg: number;
	setCurrentImg: (value: React.SetStateAction<number>) => void;
	next?: boolean;
	length: number;
}> = ({ currentImg, setCurrentImg, next = true, length }) => {
	const nextClick = () => setCurrentImg((prev) => prev + 1);
	const prevClick = () => setCurrentImg((prev) => prev - 1);

	return (
		<button
			className="
      w-10 rounded-full 
      bg-white inline-block 
      disabled:border-gray-200 disabled:bg-gray-300/50 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
			disabled={next ? currentImg === length - 1 : currentImg === 0}
			onClick={next ? nextClick : prevClick}
		>
			{next ? (
				<svg
					width="800px"
					height="800px"
					viewBox="-2.4 -2.4 28.80 28.80"
					className=" w-full h-full"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#B88E2F"
					transform="rotate(0)"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />

					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>

					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M10 7L15 12L10 17"
							stroke="#B88E2F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>{" "}
					</g>
				</svg>
			) : (
				<svg
					width="800px"
					height="800px"
					viewBox="-2.4 -2.4 28.80 28.80"
					className=" w-full h-full"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#B88E2F"
					transform="rotate(180)"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />

					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>

					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M10 7L15 12L10 17"
							stroke="#B88E2F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>{" "}
					</g>
				</svg>
			)}
		</button>
	);
};

export default CarouselButton;
