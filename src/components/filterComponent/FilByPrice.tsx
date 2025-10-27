import React from "react";

const FilByPrice = ({
	min,
	max,
	defaultValue,
}: {
	min: number;
	max: number;
	defaultValue: number;
}) => {
	return (
		<div>
			<input type={"range"} min={min} max={max} value={defaultValue} />
		</div>
	);
};

export default FilByPrice;
