const React = require('react')

function Show({log}){
    console.log(log)
    return(
        <main>
            <nav>
                <a href="/logs">Back</a>
            </nav>
            <h1>Issue with the: <em>{log.title}</em></h1>
            <p>{log.entry}</p>
            <p>Was the ship broken?: {log.shipIsBroken ? "Yes" : "No"}</p>
            <p>Created on: <b>{new Date(log.createdAt).toISOString()}</b></p>
        </main>
    )
}
module.exports = Show;