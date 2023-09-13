export function hoursConverter(durationInMinutes) {
	const hours = Math.floor(durationInMinutes / 60);
	const minutes = durationInMinutes % 60;
	return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}

export function reducer() {
	return (acc, cur) => acc + cur;
}
