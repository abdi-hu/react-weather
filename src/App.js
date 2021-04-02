import { useEffect, useState } from "react";
import { getCurrentLatLng } from "./services/geolocation";
import "./App.css";
import Map from "./components/Map/Map";

function App() {
	const [appData, setAppData] = useState({
		lat: null,
		lng: null,
	});
	async function getAppData() {
		const { lat, lng } = await getCurrentLatLng();

		setAppData({ lat, lng });
		// we need weather data
		// set component state to the received values
	}
	useEffect(() => {
		// make your ajax request here or anything else you need on page load
		getAppData();
	}, []);
	return (
		<div className="App">
			<Map lat={appData.lat} lng={appData.lng} />
			<header className="App-header">REACT WEATHER</header>
		</div>
	);
}
export default App;
