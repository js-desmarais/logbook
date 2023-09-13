import { useState } from "react";
import { EntryField } from "./EntryField";
import { Button } from "./Button";

export function FormAddEntry({ onAddEntry }) {
	const [entry, setEntry] = useState({});
	const { date, type, registration, origin, destination, pilot, copilot, duration, takeoffs, landings } = entry;

	function handleSubmit(e) {
		e.preventDefault();

		if (entry === {}) return;

		const id = crypto.randomUUID();

		const newEntry = {
			id,
			date,
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

		// console.log(newEntry, entry);
		// onAddEntry();
		// setEntry({});
	}

	return (
		<div className="addEntry">
			<h3>Add flight details...</h3>
			<form className="addEntry__form" onSubmit={handleSubmit}>
				<EntryField type="date" name="date" onSet={e => setEntry({ date: e.target.value })} />
				{/* <EntryField type="date" name="date" onSet={handleOnSet(date)} /> */}

				<EntryField type="text" name="type" onSet={e => setEntry({ type: e.target.value })} />

				<EntryField type="text" name="registration" onSet={e => setEntry({ registration: e.target.value })} />

				<EntryField type="text" name="origin" onSet={e => setEntry({ origin: e.target.value })} />

				<EntryField type="text" name="destination" onSet={e => setEntry({ destination: e.target.value })} />

				<EntryField type="text" name="pilot" onSet={e => setEntry({ pilot: e.target.value })} />

				<EntryField type="text" name="copilot" onSet={e => setEntry({ copilot: e.target.value })} />

				<EntryField type="number" name="duration" onSet={e => setEntry({ duration: e.target.value })} />

				<EntryField type="number" name="takeoffs" onSet={e => setEntry({ takeoffs: e.target.value })} />

				<EntryField type="number" name="landings" onSet={e => setEntry({ landings: e.target.value })} />

				<Button className="btn--active" onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</div>
		// <input type="text" onChange={handleOnSet()}></input>
	);
}
