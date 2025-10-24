import { index, layout, type RouteConfig } from "@react-router/dev/routes";

export default [
	layout("./layouts/Layout.tsx", [index("./routes/Landing.tsx")]),
] satisfies RouteConfig;
