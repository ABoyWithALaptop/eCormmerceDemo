import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), reactRouter()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "./src") },
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{ find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
			{ find: "@api", replacement: path.resolve(__dirname, "src/api") },
			{ find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
		],
	},
});
