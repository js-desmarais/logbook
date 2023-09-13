import { FormAddEntry } from "./FormAddEntry";
import { Entries } from "./Entries";
import { Menu } from "./Menu";
import { Totals } from "./Totals";
import "./utils";

import { useState } from "react";

const testData = [
	{
		id: 1,
		date: new Date("03-13-2022"),
		type: "C172",
		registration: "ABCDE",
		origin: "CYAB",
		destination: "CYBA",
		pilot: "me",
		copilot: "you",
		duration: 60,
		takeoffs: 1,
		landings: 1,
	},
	{
		id: 2,
		date: new Date("03-13-2023"),
		type: "C172",
		registration: "FGHIJ",
		origin: "CYBA",
		destination: "CYAB",
		pilot: "me",
		copilot: "you",
		duration: 63,
		takeoffs: 1,
		landings: 7,
	},
	{
		// id: crypto.randomUUID,
		id: 3,
		date: new Date("06-13-2023"),
		type: "C172",
		registration: "KLMNO",
		origin: "CYAB",
		destination: "CYBA",
		pilot: "me",
		copilot: "you",
		duration: 55,
		takeoffs: 2,
		landings: 2,
	},
];

export default function App() {
	const [flights, setFlights] = useState(testData);
	const [showAddEntry, setShowAddEntry] = useState(false);

	function handleShowAddEntry() {
		setShowAddEntry(show => !show);
	}

	function handleAddEntry(entry) {
		setFlights(flights => [...flights, entry]);
	}

	return (
		<div className="app">
			<header>
				<Totals data={flights} />
				<Menu showAddEntry={showAddEntry} onOpenShowAddEntry={handleShowAddEntry} />

				{showAddEntry && <FormAddEntry onAddEntry={handleAddEntry} />}
			</header>
			<h1>Personal Flight Log App</h1>
			<main>
				<Entries data={flights} />
			</main>
		</div>
	);
}
