import { useEffect, useState, type FC } from "react";

type fileImg = {
	path: string;
	name: string;
	src: string;
};

function hasPropertyDefault(obj: unknown) {
	return obj !== null && typeof obj === "object" && "default" in obj;
}

const FurnitureShareSlider: FC = () => {
	// const [status, setStatus] = useState<"loading" | "success">("loading");
	const [imgArray, setImgArray] = useState<fileImg[]>([]);

	useEffect(() => {
		const imagesModule = import.meta.glob("/src/assets/furniture/sample*.jpg", {
			eager: true,
			query: "url",
		});

		const array = Object.values(imagesModule);
		console.log("array: ", array);
		// setImgArray(array);
	}, []);
	return (
		<div className="w-20 h-20">
			{imgArray.map((img) => (
				<img src={img.src as string} className="w-10" />
			))}
		</div>
	);
};

export default FurnitureShareSlider;
