import React from 'react';
import styled from 'styled-components';

import MyDishLogo from '../media/LogoRed.png';
import NodejsLogo from '../media/Nodejs.png';
import ReactLogo from '../media/React.png';

const Portfolio = () => {
    return (
        <div style={{'textAlign':'center'}}> 
            <h2>Portfolio</h2>
            <Portfoliobox>
                <Portfoliocard>
                    <img src={MyDishLogo} alt="My Dish Logo" style={{'borderRadius': '5px'}} />
                    <h2><a href="https://github.com/domesticdingo/MyDish">MyDish GitHub</a></h2>
                    <h3>Mobile app for users to add and store recipes and build their personal cookbook.</h3>
                    <ul>
                        <li>Collaborated with the web dev team focused on the front-end and back-end of the app, building the UX design and updating the database to handle our additions.</li>
                        <li>Developed new aspects of the user experience such as editing recipes and adding images, as well as redesigning the layout of the app.</li>
                        <li>Expanded upon the backend to allow new user functions such as tagging recipes with their course, as well as adding/changing endpoints to allow frontend to have new accessibility for the data.</li>
                    </ul>
                </Portfoliocard>
                <Portfoliocard>
                    <img src={NodejsLogo} alt="Node JS Logo" style={{'borderRadius': '5px'}} />
                    <h2><a href="https://github.com/BWHairCare02/Backend">Hair Care GitHub</a></h2>
                    <h3>Hair Care web application designed for customers and stylists, customers have the ability to review stylists and stylists can build a portfolio of their work.</h3>
                    <ul>
                        <li>Focused on back-end for the project built using Node.js to create endpoints for a front end client to connect to</li>
                        <li>Designed the data schema for the project with PostgreSQL</li>
                    </ul>
                </Portfoliocard>
                <Portfoliocard>
                    <img src={ReactLogo} alt="React Logo" style={{'borderRadius': '5px'}} />
                    <h2><a href="https://guidr-mgk9dkdka.now.sh/">Guidr</a></h2>
                    <h2><a href="https://github.com/Buildweek-guidr/frontend/">Guidr GitHub</a></h2>
                    <h3>Web app designed for tour guides to create and store trips.</h3>
                    <ul>
                        <li>Focused on front-end of the project built as a React App</li>
                        <li>Created user input forms, storing data in state, and sending it to the backend via endpoint calls</li>
                    </ul>
                </Portfoliocard>
            </Portfoliobox>
        </div>
    )
}

const Portfoliobox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
`

const Portfoliocard = styled.div`
    width: 500px;
    height: auto;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (max-width: 1200px) {
        border-bottom: 1px solid #221B28;
    }

    @media (max-width: 500px) {
        width: 300px;
        height: auto;
    }
`

export default Portfolio;