import React from 'react';
import './Board.css';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const Board = (props) => {
    if(props.isLoaded){
        return(
            
                <div className="loaded-box">
                    <span className="loaded-box-left"><MoodIcon className="loaded-box-left-icon"/></span>
                    <div className="loaded-box-status">
                        <span className="loaded-box-status-application">{props.applicationName}</span><br/><br/>
                        <span className="loaded-box-status-service-status">total {props.totalServices} out of {props.activeServices} services loaded</span><br/><br/>
                        <span className="loaded-box-status-timestamp">last loaded {props.timeStamp}</span><br/>
                    </div>     
                </div>
            
        )

    }
    else{
        return(
            <div className="unloaded-box">
                    <span className="unloaded-box-left"><MoodBadIcon className="unloaded-box-left-icon"/></span>
                    <div className="unloaded-box-status">
                        <span className="unloaded-box-status-application">{props.applicationName}</span><br/><br/>
                        <span className="unloaded-box-status-service-status">total {props.totalServices} out of {props.activeServices} services loaded</span><br/><br/>
                        <span className="unloaded-box-status-timestamp">last loaded: {props.timeStamp}</span><br/>
                    </div>     
                </div>

        )

    }
   
}

export default Board;
