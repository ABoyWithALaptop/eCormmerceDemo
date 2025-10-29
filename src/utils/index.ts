export const getURLStaticFile = (fileName: string) => {
	return new URL(`../assets/${fileName}`, import.meta.url).href;
};

export const formatPrice = (price: number, currency: string) =>
	`${currency} ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
