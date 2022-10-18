import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div className='navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/candidates">Candidates</Link></li>
            <li><Link to="/detailedview">Detailed View</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
        </ul>
        </div>
    )
}

export default NavBar;
