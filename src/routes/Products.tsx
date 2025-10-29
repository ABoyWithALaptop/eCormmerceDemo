import { createFile } from "@/api";
import FilterComponent from "@/components/filterComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Products = () => {
	return (
		<div>
			Products
			<FilterComponent />
			{/* <form
				onSubmit={(e) => {
					e.preventDefault();
					createFile(file!);
				}}
			>
				<Input
					type="file"
					name="file"
					onChange={(e) => {
						const f = e.target.files?.[0] ?? null;
						setFile(f);
					}}
				/>
				<Button type="submit">submit</Button>
			</form> */}
		</div>
	);
};

export default Products;
