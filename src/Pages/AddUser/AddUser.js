import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("")

    const [getServices, setAllServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    const index = getServices.length;

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAddUser = () => {
        const data = { name, email, password, description, index }
        console.log({ name, email, password });

        fetch("http://localhost:5000/addUser", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>
            <h2>This is AddUser</h2>
            <div>
                <input type="text" onChange={handleName} placeholder="destination name" className="p-2 mt-3" required></input>
                <br />

                <input type="text" onChange={handleEmail}
                    placeholder="image" className="p-2 mt-3" />
                <br />

                <input type="text" onChange={handleDescription}
                    placeholder="description" className="p-2 mt-3" />
                <br />

                <input type="number" onChange={handlePassword}
                    placeholder="add price" className="p-2 mt-3" />
                <br />



                <button onClick={handleAddUser} className="btn btn-success mt-3">Add user</button>
            </div>
        </div>

    );
};

export default AddUser;