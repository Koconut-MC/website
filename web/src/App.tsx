import { Route, Routes } from "react-router";
import Home from "./app/home";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" index element={<Home />} />
		</Routes>
	);
}

export default App;
