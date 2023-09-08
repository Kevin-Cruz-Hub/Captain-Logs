const React = require('react')

function Issues({logs}){
    console.log(logs)
    return(
        <main>
            <nav>
                <a href='/logs/new'>Create a log</a>
            </nav>
            <h1>Issues</h1>
            <ul>
                {
                    logs.map((log)=>{
                        return(
                            <li key={log._id}>
                                <a href="">{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}
module.exports = Issues;