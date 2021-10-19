import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const myArray = []
    const { serviceId } = useParams()
    const [getBooking, setBooking] = useState([])
    useEffect( () =>{
        fetch('../foods.json')
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])

    for(const i of getBooking){
        if(i.id == serviceId){
            myArray.push(i.name)
            myArray.push(i.picture)
            myArray.push(i.description)
            
        }
    }
    console.log(myArray)

    return (
        <div>
            
            <h2>This is booking: {serviceId}</h2>
            <img src={myArray[1]} alt=""></img>
            <h1>{myArray[0]}</h1>
            <h5>{myArray[2]}</h5>

            
        </div>
    );
};

export default Booking;