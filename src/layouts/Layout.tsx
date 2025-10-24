import Footer from "@/components/footer/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div>
			<NavBar
				links={[
					{ name: "Home", route: "/" },
					{ name: "Shop", route: "/shop" },
					{ name: "About", route: "/about" },
					{ name: "Contact", route: "/contact" },
				]}
			/>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
