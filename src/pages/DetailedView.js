import { useState } from "react"
import BarChart from "../BarChart"
import {UserData} from "../Data"
function DetailedView() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.company),
        datasets: [{
            label: "Salary $",
            data: UserData.map((data) => data.salary),
            backgroundColor: ["red", "green", "blue", "teal", "purple", "gray", "brown"],
            borderColor: "black",
            borderWidth: 2
        }]
    })

    return(
        
        <div style={{width: 1500}}>
            <h1>Detailed View</h1>
            <h3>This chart displays the salary for the given companies.</h3>
            <BarChart chartData={userData}/>
        </div>
    )
}

export default DetailedView