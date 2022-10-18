import React from 'react'

const jobs = [
    { company: 'WinCo Foods', position: 'Human Resources Manager', salary: "54,600" },
    { company: 'Intel Corporation', position: 'Senior Software Developer', salary: "115,530" },
    { company: 'Nike', position: 'Team Lead', salary: "86,320" },
    { company: 'H&M', position: 'Human Resources Manager', salary: "76,420" },
    { company: 'Samsung', position: 'International Business Leader', salary: "132,120" },
    { company: 'EA', position: 'Game Desinger', salary: "74,900" },
    { company: 'BroadComm', position: 'Cloudbased Programmer', salary: "94,370" }
];


function JobsPage() {  
    return(
        <div>
            <h1> Jobs</h1>
            <h3> Displays a list of jobs and their given salaries. Click on any listing to be redirected to their posting.</h3>
            <a className="styledAnchor" href="/external" >
           
            <table className="jobs">
                <tr> 
                    <th>Company</th>
                    <th>Postion</th>
                    <th>Salary</th>
                </tr>
                {jobs.map((employer) => 
                <tr>
                   <td>{employer.company}</td>
                   <td>{employer.position}</td>
                   <td>${employer.salary}</td>
                </tr>
                )}
            </table>
           

            </a>
        </div>
    )
    
}

export default JobsPage