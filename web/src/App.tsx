import { Route, Routes } from "react-router";
import BgVideo from "./components/bg-video";
import Header from "./components/header";
import Home from "./app/home";
import "./index.css";

// The header bar handles routing
function Routing() {
	return (
		<Routes>
			<Route path="/" index element={<Home />} />
		</Routes>
	);
}

function App() {
	return (
		<>
			<Routing />
			<BgVideo />
			<Header />
		</>
	);
}

export default App;
