const React = require('react')

function New(){
    return(
        <main>
            <h1>New Log</h1>
            <form action='/logs' method='POST'>
                Title: <input type='text' name='title' required/><br/>
                Entry: <input type='text' name='entry' required/><br/>
                Broken: <input type='checkbox' name='shipIsBroken'/><br/>
                <input type='submit' value='Submit'/>
            </form>
        </main>
    )
}
module.exports = New;