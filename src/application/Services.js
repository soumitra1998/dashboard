import React from 'react';
import './services.css';
import Button from '@material-ui/core/Button';
import CachedIcon from '@material-ui/icons/Cached';

const Services = (props) => {
    
    if(props.loaded){
        return(
            <div className="service-success">
                <div className="service-success-box">
                <div className="service-sucess-box-status">
                    <span className="service-sucess-box-status-name">{props.serviceName}</span><br/><br/>
                    <span className="service-sucess-box-status-lastloadtime">last loaded:{props.lastloaded}</span> <br/>
                    <span className="service-success-box-status-nextloadtime">next loading :{props.nextloaded}</span>
                </div>
                <div className="service-reload-button">
                    <Button variant="contained" color="primary"><CachedIcon/></Button>
                </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="service-fail">
                <div className="service-fail-box">
                <div className="service-fail-box-status">
                    <span className="service-fail-box-status-name">{props.serviceName}</span><br/><br/>
                    <span className="service-fail-box-status-lastloadtime">last loaded:{props.lastloaded}</span> <br/>
                    <span className="service-fail-box-status-nextloadtime">next loading :{props.nextloaded}</span>
                </div>
                <div className="service-reload-button">
                    <Button variant="contained" color="primary"><CachedIcon/></Button>
                </div>

                </div>
            </div>

        )
    }
    
}

export default Services
