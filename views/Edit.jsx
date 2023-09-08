const React = require("react");

function Edit({ log }) {
	return (
		<main>
			<h2>Edit the log for {log.title}</h2>

			<form action={`/api/logs/${log._id}?method=PUT`} method="POST">
				Title:{" "}
				<input type="text" name="title" defaultValue={log.title} required />
				<br />
				{/* Author: <input type='text' name='author'/><br/> */}
				Body:{" "}
				<textarea name="body" defaultValue={log.entry} required></textarea>
				<br />
				Broken?{" "}
				<input
					type="checkbox"
					name="sponsored"
					defaultChecked={log.shipIsBroken}
				/>
				<br />
				<input type="submit" value="Edit Log" />
			</form>
		</main>
	);
}
module.exports = Edit;
