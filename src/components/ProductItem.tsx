import { useState, type FC } from "react";
import productImg from "../assets/productImg/prod1.png";
import shareSvg from "@/assets/svg/share.svg";
import compareSvg from "@/assets/svg/compare.svg";
import likeSvg from "@/assets/svg/like.svg";
export type productType = {
	name: string;
	fullName: string;
	price: number;
	currency: string;
	status: string;
	salePercent: number;
};
const StatusTag = ({
	status,
	salePercent,
}: {
	status: string;
	salePercent: number;
}) => {
	let text = "";
	let classString =
		"rounded-full aspect-square flex items-center justify-center text-sm w-fit p-2";
	if (status === "new") {
		text = "New";
		classString += " bg-[#2EC1AC] text-white  ";
	} else if (status === "sale") {
		text = `-${salePercent}%`;
		classString += " bg-[#E97171] text-white ";
	}
	return (
		<div className={classString}>
			<p>{text}</p>
		</div>
	);
};

const Overlay = () => {
	return (
		<div
			className="bg-gray-600/80 
		flex flex-col items-center justify-center gap-2
		z-10
		absolute top-0 right-0 left-0 bottom-0 "
		>
			<button className="font-semibold text-base text-[#B88E2F] bg-white px-14 py-3">
				Add to cart
			</button>
			<div className="flex gap-2 text-white">
				<div className="productItemInteract">
					<img src={shareSvg} alt="shareIcon" className="w-3 aspect-square" />
					Share
				</div>
				<div className="productItemInteract">
					<img
						src={compareSvg}
						alt="compareIcon"
						className="productItemInteractIcon"
					/>
					Share
				</div>
				<div className="productItemInteract">
					<img
						src={likeSvg}
						alt="likeIcon"
						className="productItemInteractIcon"
					/>
					Share
				</div>
			</div>
		</div>
	);
};

const ProductItem: FC<{ product: productType }> = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false);

	const finalePrice =
		product.price - (product.price * product.salePercent) / 100;

	return (
		<div
			className="mt-14 relative "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <Overlay />}
			<div className="flex flex-col items-center">
				<div className="relative">
					<div className="absolute right-2 top-2">
						<StatusTag
							status={product.status}
							salePercent={product.salePercent}
						/>
					</div>
					<img src={productImg} />
				</div>
				<div className="bg-[#F4F5F7] w-full p-4">
					<h2 className="font-semibold text-2xl">{product.name}</h2>
					<p className="text-[#898989] text-base">{product.fullName}</p>

					<div className="flex items-center gap-2 ">
						<h3 className="font-semibold text-xl">
							{finalePrice} {product.currency}
						</h3>
						<p className="text-[#898989] text-base line-through">
							{product.price} {product.currency}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
