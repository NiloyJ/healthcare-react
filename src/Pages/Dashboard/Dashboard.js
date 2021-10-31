import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders)
    return (
        <div>
            <h1>I am deshboard {orders?.length}</h1>
            
        </div>
    );
};

export default Dashboard;