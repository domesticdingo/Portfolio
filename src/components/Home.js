import React from 'react';
import Portfolio from './Portfolio';

//Images
import prof from '../media/portrait.jpg';

//Styles
import { Bodybox, Banner, Sidebar, Primary, SideLink, Content, PortfolioBox, Image } from "./Styles"

const Homepage = () => {
    return (
        <div>
            <Banner>
                <h1>Full-Stack Web Developer based in San Francisco, California.</h1>
            </Banner>

            <Bodybox>
                <Content>
                    <Sidebar>
                        <Image src={prof} alt="Portrait of Indigo" />
                        <h2 style={{'color':'#F0F0F0'}}>Indigo Richards</h2>
                        <p style={{'color':'#F0F0F0'}}>dingorichards@gmail.com</p>
                        <SideLink href="https://www.linkedin.com/in/indigo-richards-121458a9/">LinkedIn</SideLink>{"\n"}
                        <SideLink href="https://github.com/domesticdingo">GitHub</SideLink>{"\n"}
                        <SideLink href="https://resume.creddle.io/resume/iperhru0anr">Resumé</SideLink>{"\n"}
                        <p style={{'color':'#F0F0F0'}}>Working everyday to become a leader and more proficient programmer.</p>
                    </Sidebar>

                    <Primary>
                        <h2 style={{'text-align':'center'}}>Skills</h2>
                        <h3>Front-End Development</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Expo.io</li>
                            <li>Redux</li>
                            <li>Python</li>
                        </ul>
                        <h3>Back-End Development</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>SQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </Primary>
                </Content>

                <PortfolioBox>
                    <Portfolio />
                </PortfolioBox>
            </Bodybox>
        </div>
    )
}

export default Homepage;