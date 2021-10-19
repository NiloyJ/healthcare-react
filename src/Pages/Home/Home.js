import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Teams from './Teams/Teams';
import health1 from '../../images/health1.jpg'
import health2 from '../../images/health2.jpg'
import health3 from '../../images/health3.jpg'
import Footer from '../Shared/Footer/Footer';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div id="home">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={health1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Using high tech for you</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={health2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Guranteed professional treament for everyone</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={health3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We hear to patients with patience </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <Teams></Teams>
            <Pricing></Pricing>
            <Contact></Contact>
        </div>
    );
};

export default Home;