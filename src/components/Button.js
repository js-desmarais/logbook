export function Button({ addClass, onClick, children }) {
	return (
		<button className={`btn${addClass || ""}`} onClick={onClick}>
			{children}
		</button>
	);
}
