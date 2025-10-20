import { type FC } from "react";
import logo from "../assets/logo.svg";
import bookmarkIcon from "../assets/navBarIcon/bookmark.svg";
import cartIcon from "../assets/navBarIcon/cart.svg";
import searchIcon from "../assets/navBarIcon/search.svg";
import notiIcon from "../assets/navBarIcon/noti.svg";

type linkRoute = {
	name: string;
	route: string;
};

const NavBar: FC<{ links: linkRoute[] }> = ({ links }) => {
	return (
		<div className="flex w-full justify-between px-14 py-7 sticky top-0 left-0 right-0 bg-white  border-b border-gray-200 z-99">
			<section className="flex items-center gap-2">
				<img src={logo} alt="logo" />
				<h1 className="text-3xl font-bold">Furniro</h1>
			</section>
			<section>
				<ul className="flex gap-10 items-center font-semibold">
					{links.map((link) => (
						<li key={link.route}>
							<a href={link.route}>{link.name}</a>
						</li>
					))}
				</ul>
			</section>
			<section className="flex items-center gap-10">
				<img src={notiIcon} alt="notiIcon" className="w-6" />
				<img src={searchIcon} alt="searchIcon" className="w-6" />
				<img src={bookmarkIcon} alt="bookmarkIcon" className="w-6" />
				<img src={cartIcon} alt="cartIcon" className="w-6" />
			</section>
		</div>
	);
};

export default NavBar;
