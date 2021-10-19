import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { name, id, price, description, picture } = props.service;

    return (
        <div className="service">
            <img src={picture} style={{height: '30vh'}} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <p>{description}</p>
            <Link to={`booking/${id}`}><button className="btn btn-primary">BOOK {name.toUpperCase()}</button></Link>
        </div>
    );
};

export default Service;