import { Route, Routes } from "react-router";
import BgVideo from "./components/bg-video";
import Home from "./app/home";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" index element={<Home />} />
		</Routes>
	);
}

			<BgVideo />
export default App;
