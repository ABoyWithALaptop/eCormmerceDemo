import React from "react";
import FilByPrice from "./FilByPrice";
import { formatPrice } from "@/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ui/accordion";

const FilterComponent = () => {
	return (
		<div>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						<FilByPrice
							min={10}
							max={20}
							defaultValue={[100]}
							format={(val) => formatPrice(val, "$")}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default FilterComponent;
