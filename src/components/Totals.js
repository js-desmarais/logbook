// import { hoursConverter, reducer } from "./utils";
import { hoursConverter, reducer } from "./utils";

export function Totals({ data }) {
	const totalTime = data.map(el => el.duration).reduce((acc, cur) => acc + cur);
	const totalTakeoffs = data.map(el => el.takeoffs).reduce(reducer());
	const totalLandings = data.map(el => el.landings).reduce(reducer());

	return (
		<div className="totals">
			<h2>Totals</h2>
			<div className="totals__list">
				<Stat value={hoursConverter(totalTime)}>Total time</Stat>
				<Stat value={data.length}>Total flights</Stat>
				<Stat value={totalTakeoffs}>Takeoffs</Stat>
				<Stat value={totalLandings}>Landings</Stat>
			</div>
		</div>
	);
}
function Stat({ value, children }) {
	return (
		<div className="stat">
			<h3>{children}</h3>
			<span>{value}</span>
		</div>
	);
}
