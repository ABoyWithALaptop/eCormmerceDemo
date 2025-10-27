import React from "react";
import FilByPrice from "./FilByPrice";

const FilterComponent = () => {
	return (
		<div>
			<FilByPrice min={0} max={100} defaultValue={50} />
		</div>
	);
};

export default FilterComponent;
