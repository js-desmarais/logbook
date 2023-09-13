import { useState } from "react";
import { EntryField } from "./EntryField";
import { Button } from "./Button";

export function FormAddEntry({ onAddEntry }) {
	const [entry, setEntry] = useState({ type: "test", registration: "CGORE" });
	// const { [date, setDate], [type, setType], [registration, setRegistration], [origin, setOrigin], [destination, setDestination], [pilot, setPilot], [copilot, setCopilot], [duration, setDuration], [takeoffs, setTakeoffs], [landings, setLandings] } = useState();
	const { date, type, registration, origin, destination, pilot, copilot, duration, takeoffs, landings } = entry;

	function handleSubmit(e) {
		e.preventDefault();

		if (entry === {}) return;

		const id = crypto.randomUUID();
		const newEntry = {
			id,
			date: new Date(date),
			type,
			registration,
			origin,
			destination,
			pilot,
			copilot,
			duration,
			takeoffs,
			landings,
		};

		console.log(newEntry);
		onAddEntry(newEntry);
		// setEntry({});
	}

	// BUG these don't work. Either passes p as a key name, or overwrites the entire object.
	/* 	function handleOnSet(p) {
		return e => {
			entry[p] = e.target.value;
			setEntry({ ...entry });
		};
		// return e => setEntry((entry[p] = e.target.value));
		// setEntry({
		// 	...entry,
		// 	entry[p]= e.target.value,
		// });
	} */

	return (
		<div className="addEntry">
			<h3>Add flight details...</h3>
			<form className="addEntry__form" onSubmit={handleSubmit}>
				{/* <EntryField type="date" name="date" onSet={handleOnSet(date)} /> */}

				<EntryField type="date" name="date" onSet={e => setEntry({ ...entry, date: e.target.value })} />

				<EntryField type="text" name="type" onSet={e => setEntry({ ...entry, type: e.target.value })} />

				<EntryField type="text" name="registration" onSet={e => setEntry({ ...entry, registration: e.target.value })} />

				<EntryField type="text" name="origin" onSet={e => setEntry({ ...entry, origin: e.target.value })} />

				<EntryField type="text" name="destination" onSet={e => setEntry({ ...entry, destination: e.target.value })} />

				<EntryField type="text" name="pilot" onSet={e => setEntry({ ...entry, pilot: e.target.value })} />

				<EntryField type="text" name="copilot" onSet={e => setEntry({ ...entry, copilot: e.target.value })} />

				<EntryField type="number" name="duration" onSet={e => setEntry({ ...entry, duration: e.target.value })} />

				<EntryField type="number" name="takeoffs" onSet={e => setEntry({ ...entry, takeoffs: e.target.value })} />

				<EntryField type="number" name="landings" onSet={e => setEntry({ ...entry, landings: e.target.value })} />

				<Button className="btn--active">Submit</Button>
			</form>
		</div>
		// <input type="text" onChange={handleOnSet()}></input>
	);
}
