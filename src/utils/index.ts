export const getURLStaticFile = (fileName: string) => {
	return new URL(`../assets/${fileName}`, import.meta.url).href;
};
