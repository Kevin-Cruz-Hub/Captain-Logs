const React = require('react')

function New(){
    return(
        <main>
            <h1>New Log</h1>
            <form action='/api/logs' method='POST'>
                Title: <input type='text' name='title' required/><br/>
                Entry: <textarea type='text' name='entry' required></textarea><br/>
                Broken: <input type='checkbox' name='shipIsBroken'/><br/>
                <input type='submit' value='Submit'/>
            </form>
        </main>
    )
}
module.exports = New;