import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className="service-container">
            {
                services.map(service => <Service key={service.name} service={service}></Service>)
            }
        </div>
    );
};

export default Services;