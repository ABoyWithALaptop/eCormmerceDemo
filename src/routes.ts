import {
	index,
	layout,
	route,
	type RouteConfig,
} from "@react-router/dev/routes";

export default [
	layout("./layouts/Layout.tsx", [
		index("./routes/Landing.tsx"),
		route("products", "./routes/Products.tsx"),
	]),
] satisfies RouteConfig;
