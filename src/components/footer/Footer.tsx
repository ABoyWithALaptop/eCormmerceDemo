import React, { useState } from "react";
import { Link } from "react-router";

const Footer = () => {
	const [email, setEmail] = useState("");
	const handleSubmitEmail = () => {
		console.log("email submitted: ", email);
	};

	return (
		<footer className="px-24 py-12 border-t border-gray-200">
			<div className="grid grid-cols-1 md:grid-cols-4 border-b-1 border-gray-200 pb-12">
				<div className="">
					<h3 className="font-semibold text-3xl h-14">Funiro</h3>
					<p className="text-base text-[#9F9F9F]">
						400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
					</p>
				</div>
				<div className=" flex flex-col">
					<h5 className="font-semibold text-sm text-[#9F9F9F] h-14">Links</h5>
					<div className="flex flex-col gap-11">
						<Link to={"/"} className="font-semibold text-base">
							Home
						</Link>
						<Link to={"/"} className="font-semibold text-base">
							Shop
						</Link>
						<Link to={"/"} className="font-semibold text-base">
							About
						</Link>
						<Link to={"/"} className="font-semibold text-base">
							Contact
						</Link>
					</div>
				</div>
				<div className=" flex flex-col">
					<h5 className="font-semibold text-sm text-[#9F9F9F] h-14">Help</h5>
					<div className="flex flex-col gap-11">
						<Link to={"/"} className="font-semibold text-base">
							Payment Options
						</Link>
						<Link to={"/"} className="font-semibold text-base">
							Returns
						</Link>
						<Link to={"/"} className="font-semibold text-base">
							Privacy Policies
						</Link>
					</div>
				</div>
				<div className="">
					<h5 className="font-semibold text-sm text-[#9f9f9f] h-14">
						Newsletter
					</h5>
					<div className="flex gap-2 items-end">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="text-sm font-light text-[#9F9F9F] border-b-1 border-[#9f9f9f] pb-2"
							placeholder="Enter Your Email Address"
						/>
						<button
							className="px-0 pt-0 pb-2 text-base font-semibold uppercase border-b-1 border-[#9f9f9f]"
							onClick={handleSubmitEmail}
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<p className="text-base pt-9">@2025 Funiro. All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
