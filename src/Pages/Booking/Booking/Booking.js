import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const myArray = []
    const { serviceId } = useParams()
    const [getBooking, setBooking] = useState([]);
    const { user, logOut } = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    for (const i of getBooking) {
        if (i._id == serviceId) {
            myArray.push(i.name)
            myArray.push(i.password)
            myArray.push(i.email)

        }
    }
    console.log(myArray)

    return (
        <div>
            <h5>Welcome {user?.displayName}</h5>

            <img src={myArray[2]} alt=""></img>
            <h1>{myArray[0]}</h1>
            <h5>Price: {myArray[1]}</h5>
            <Link to="/myorders"><button className="btn btn-primary">GO FOR THE TRIP</button></Link>
        </div>
    );
};

export default Booking;