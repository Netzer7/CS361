import React from 'react'

function Home() {
    return(
        <div>
        <header>
            <h1> Welcome to UnLinked</h1>
            <h3> Click on a button to be redirected to it's corresponding page.</h3>
        </header>

        <body>
            <div className='buttons'>
            <ul>
                <li><a href="candidates">Candidates</a></li>
                <li><a href="detailedView">Detailed View</a></li>
                <li><a href="jobs">Jobs</a></li>
            </ul>
            </div>
        </body>
        </div>
    )
}


export default Home