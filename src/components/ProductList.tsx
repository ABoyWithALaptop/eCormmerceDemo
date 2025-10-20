import { type FC } from "react";
import type { productType } from "./ProductItem";
import ProductItem from "./ProductItem";

const ProductList: FC<{ listProduct: productType[] }> = ({ listProduct }) => {
	return (
		<div className="pt-14 flex items-center flex-col">
			<h2 className="font-bold text-4xl">Our Product</h2>
			<div className="flex flex-wrap justify-center gap-8">
				{listProduct.map((product) => (
					<ProductItem product={product} />
				))}
			</div>
			<button className="mt-8 text-[#B88E2F] py-3 px-20 border border-[#B88E2F] text-base font-semibold">
				Show more
			</button>
		</div>
	);
};

export default ProductList;
