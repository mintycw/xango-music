import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Checkout from "./components/cart/Checkout";
import Catalogue from "./pages/catalogue/Catalogue";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/catalogue" element={<Catalogue />} />
				<Route path="/catalogue/:id" element={<Catalogue />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/news" element={<News />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
