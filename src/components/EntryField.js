export function EntryField({ type, name, onSet }) {
	return (
		<div className="field">
			<label htmlFor={name}>{name}</label>
			<input type={type} min={type === "number" ? "0" : ""} name={name} onChange={onSet} />
		</div>
	);
}
