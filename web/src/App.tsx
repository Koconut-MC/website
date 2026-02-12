import { Route, Routes } from "react-router";
import BgVideo from "./components/bg-video";
import Header from "./components/header";
import Home from "./app/home";
import "./index.css";

function App() {
	return (
		<>
			<BgVideo />
			<Header />
			<Routes>
				<Route path="/" index element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
