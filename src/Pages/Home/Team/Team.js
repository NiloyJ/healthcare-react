import React from 'react';
import './Team.css'


const Team = (props) => {

    const { name, price, profession, picture } = props.team
    return (
        <div>
            <div class="card-group d-flex">
                <div class="card">
                    <img src={picture} class="card-img-top" alt="..."></img>
                </div>
                <div class="card cardinfo">
                    <div class="card-body mt-25">
                        <h1 class="card-title">{name}</h1>
                        <p class="card-text">{profession}</p>
                        <p class="card-text">{price}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Team;