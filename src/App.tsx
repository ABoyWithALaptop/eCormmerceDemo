import "./App.css";
import HeroLanding from "./components/HeroLanding";
import InspirationList from "./components/InspirationList";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import RangeProductSection from "./components/RangeProductSection";

function App() {
	return (
		<>
			<NavBar
				links={[
					{ name: "Home", route: "/" },
					{ name: "Shop", route: "/shop" },
					{ name: "About", route: "/about" },
					{ name: "Contact", route: "/contact" },
				]}
			/>
			<HeroLanding />
			<div className="text-center mx-32 mt-14">
				<RangeProductSection
					segmentList={[
						{ name: "Living", segment: "living" },
						{ name: "Dinning", segment: "dinning" },
						{ name: "Bedroom", segment: "bedroom" },
					]}
				/>
				<ProductList
					listProduct={[
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "new",
							salePercent: 20,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "sale",
							salePercent: 20,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "new",
							salePercent: 0,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "sale",
							salePercent: 50,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "sale",
							salePercent: 80,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "new",
							salePercent: 20,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "new",
							salePercent: 20,
						},
						{
							name: "Sofa",
							fullName: "Stylish cafe chair",
							price: 2500000,
							currency: "VND",
							status: "new",
							salePercent: 20,
						},
					]}
				/>
				<InspirationList
					list={[
						{
							name: "Inner Peace",
							fullName: "01 -- Bed Room",
							bgAddress: "inspirationImg.png",
						},
						{
							name: "Ocean Breeze",
							fullName: "02 -- Deluxe Room",
							bgAddress: "inspirationImg2.png",
						},
						{
							name: "Mountain View",
							fullName: "03 -- Suite Room",
							bgAddress: "inspirationImg.png",
						},
						{
							name: "Golden Sunset",
							fullName: "04 -- Penthouse",
							bgAddress: "inspirationImg2.png",
						},
						{
							name: "Inner Peace",
							fullName: "01 -- Bed Room",
							bgAddress: "inspirationImg.png",
						},
						{
							name: "Inner Peace",
							fullName: "01 -- Bed Room",
							bgAddress: "inspirationImg.png",
						},
					]}
				/>
			</div>
		</>
	);
}

export default App;
