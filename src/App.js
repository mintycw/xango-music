import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Checkout from "./components/cart/Checkout";
import Catalogue from "./pages/catalogue/Catalogue";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/catalogue">
					<Route index element={<Catalogue />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
