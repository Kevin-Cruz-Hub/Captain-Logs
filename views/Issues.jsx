const React = require("react");

function Issues({ logs }) {
	return (
		<main>
			<nav>
				<a href="/logs/new">Create a log</a>
                <br/>
                <a href="/api/logs/seed">Dummy Data</a>
			</nav>
			<h1>Issues</h1>
			<ul>
				{logs.map((log) => {
					return (
						<li key={log._id}>
							<a href={`/logs/${log._id}`}>{log.title}</a>
							<form
								method="POST"
								// The method override looks for the method in action, because the form by default can only do GET and POST
								action={`/api/logs/${log._id}?_method=DELETE`}
							>
								{/* form and input is used because we are going to use a npm package that will allow us to delete and update*/}
								<input type="submit" value="Delete" />
							</form>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
module.exports = Issues;
