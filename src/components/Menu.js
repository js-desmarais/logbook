import { Button } from "./Button";

export function Menu({ showAddEntry, onOpenShowAddEntry }) {
	return (
		<div className="menu">
			<h2>Menu</h2>
			<nav className="menu__list">
				<Button addClass={showAddEntry ? "--active" : ""} onClick={onOpenShowAddEntry}>
					{showAddEntry ? "Close" : "Add flight"}
				</Button>
				<Button>Edit flight</Button>
				<Button>Delete flight</Button>
			</nav>
		</div>
	);
}
