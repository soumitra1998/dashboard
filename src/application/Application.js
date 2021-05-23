import React from 'react';

import './application.css';
import CachedIcon from '@material-ui/icons/Cached';
import Services from './Services';
import Button from '@material-ui/core/Button';

const Application = ({match}) => {
    
    const data=[
        {
            "serviceName":"service1",
            "lastloaded":"2014-03-12",
            "nextloaded":"2014-03-12",
            "loaded":true
        },
        {
            "serviceName":"service2",
            "lastloaded":"2014-03-12",
            "nextloaded":"2014-03-12",
            "loaded":false
        },
        {
            "serviceName":"service3",
            "lastloaded":"2014-03-12",
            "nextloaded":"2014-03-12",
            "loaded":true
        },
       
    ]

   
    
    
    
    return (
        
        <div className="application">
            <div className="application-name">
                <h1 className="application-name-text">{match.params.applicationName}</h1>
                <hr/>
            </div >
            <div className="application-services-reload">
                <Button ><CachedIcon /></Button>   
            </div>
            <div className="application-services">
                {
                    data.map((val,index)=>(
                        <Services
                            key={index}
                            serviceName={val.serviceName}
                            lastloaded={val.lastloaded}
                            nextloaded={val.nextloaded}
                            loaded={val.loaded}
                        />
                    ))
                }
               
            </div>    
        </div>
     
    )
}

export default Application
