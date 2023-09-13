import { hoursConverter } from "./utils";

export function Entries({ data }) {
	return (
		<section className="logbook">
			<h2>Logbook</h2>
			<table>
				<thead>
					<tr className="logbook__header">
						<th>Date</th>
						<th>Type</th>
						<th>Registration</th>
						<th>Origin</th>
						<th>Destination</th>
						<th>Pilot</th>
						<th>Copilot</th>
						<th>Duration</th>
						<th>Takeoffs</th>
						<th>Landings</th>
					</tr>
				</thead>
				<tbody>
					{data.map(entry => (
						<Entry key={entry.id} entry={entry} />
					))}
				</tbody>
			</table>
		</section>
	);
}

export function Entry({ entry }) {
	return (
		<tr className="logbook__entry">
			<td>{entry.date.toLocaleDateString("en-ca")}</td>
			<td>{entry.type}</td>
			<td>{entry.registration}</td>
			<td>{entry.origin}</td>
			<td>{entry.destination}</td>
			<td>{entry.pilot}</td>
			<td>{entry.copilot}</td>
			<td>{hoursConverter(entry.duration)}</td>
			<td>{entry.takeoffs}</td>
			<td>{entry.landings}</td>
		</tr>
	);
}
