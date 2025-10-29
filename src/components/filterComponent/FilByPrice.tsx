import { useState, type ComponentProps } from "react";
import { Slider } from "@ui/slider";

type sliderProps = ComponentProps<typeof Slider>;

const FilByPrice = ({
	min,
	max,
	value,
	format,
	...props
}: {
	min: number;
	max: number;
	format: (value: number) => string;
} & sliderProps) => {
	const [valueState, setValue] = useState<number[]>(value ?? [min, max]);
	const handleChange = (value: [number, number]) => setValue(value);
	return (
		<div>
			<p className="text-sm font-semibold mb-2">Price Range</p>
			<Slider
				defaultValue={[min, max]}
				value={valueState}
				onValueChange={handleChange}
				max={max}
				min={min}
				step={1}
				format={format}
				{...props}
			/>
			<div className="hidden md:flex justify-between">
				<span className="text-sm font-semibold mt-2">{format(min)}</span>
				<span className="text-sm font-semibold mt-2">{format(max)}</span>
			</div>
		</div>
	);
};

export default FilByPrice;
