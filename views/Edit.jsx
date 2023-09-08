const React = require("react");

function Edit({ log }) {
	return (
		<main>
			<h2>Edit the log for {log.title}</h2>

			<form action={`/api/logs/${log._id}?_method=PUT`} method="POST">
				Title:{" "}
				<input type="text" name="title" defaultValue={log.title} required />
				<br />
				Body:{" "}
				<textarea name="entry" defaultValue={log.entry} required></textarea>
				<br />
				Broken?{" "}
				<input
					type="checkbox"
					name="shipIsBroken"
					defaultChecked={log.shipIsBroken}
				/>
				<br />
				<input type="submit" value="Edit Log" />
			</form>
		</main>
	);
}
module.exports = Edit;
