import React from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Board from './Board';



const Dashboard = () => {
    const data=[
        {
            "appID":100,
            "applicationName":"application1",
            "totalServices":8,
            "activeServices":8,
            "timeStamp":"2014-03-12",
            "isLoaded":true
        },
        {
            "appID":101,
            "applicationName":"application2",
            "totalServices":8,
            "activeServices":6,
            "timeStamp":"2014-03-12",
            "isLoaded":false
        },
        {
            "appID":102,
            "applicationName":"application3",
            "totalServices":8,
            "activeServices":8,
            "timeStamp":"2014-03-12",
            "isLoaded":true
        }
    ]
    
   
    return (
        <div className="dashboard">
            <div className="dashboard_text">
                <h1>Dashboard</h1><hr/>
            </div>
            <div className="dashboard-board">
                {
                    data.map((val,index)=>
                        <Link  className="dashboard-board-link" to={`/application/${val.applicationName}/${val.appID}`}>
                            <Board
                                key={index}
                                applicationName={val.applicationName}
                                totalServices={val.totalServices}
                                activeServices={val.activeServices}
                                timeStamp={val.timeStamp}
                                isLoaded={val.isLoaded}
                            />
                        </Link>
                    
                    )
                }

            </div>
        </div>
    )
}

export default Dashboard;
