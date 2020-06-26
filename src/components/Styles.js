import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import LeagueSpartanRegular from '../fonts/LeagueSpartanRegular.woff';
import LeagueSpartanRegular2 from '../fonts/LeagueSpartanRegular.woff2';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'League Spartan Regular';
        src: local('League Spartan Regular'), local('League Spartan Regular'),
        url(${LeagueSpartanRegular}) format('woff'),
        url(${LeagueSpartanRegular2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    html, body {
        background-color: #221B28;
    }
    html, body, h1, h2, h3, p {
        font-family: 'League Spartan Regular';
    }
`

export const Banner = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    border: 1px solid #F0F0F0;
    text-align: center;
    width: 90%;
    height: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    margin-bottom: 10px;
`

export const Bannerimg = styled.div`
    max-width: 500px;
    max-height: 330px;
    background-color: #F0F0F0;
`

export const Bannerdesc = styled.div`
    max-width: 300px;
    background-color: #F0F0F0;
`

export const Sidebar = styled.div`
    background-color: #76729D;
    border-radius: 10px;
    border: 1px solid #76729D;
    padding: 15px;
    text-align: center;
    max-width: 400px;
    height: auto;

    @media (max-width: 500px) {
        max-width: 300px;
    }
`

export const SideLink = styled(Link)`
    color: #F0F0F0;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const Primary = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    border: 1px solid #F0F0F0;
    max-width: 400px;
    height: auto;
    margin-top: 10px;
    padding: 15px;

    @media (max-width: 500px) {
        max-width: 300px;
    }
`

export const Content = styled.div`
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;
    max-width: 500px;
`

export const PortfolioBox = styled.div`
    background-color: #F0F0F0;
    border: 1px solid #F0F0F0;
    border-radius: 10px;
    width: 60%;
    height: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;

    @media (max-width: 500px) {
        width: auto;
        height: auto;
    }
`

export const Bodybox = styled.div`
    display: flex;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Image = styled.img`
    border-radius: 5px;

    @media (max-width: 500px) {
        height: 275px;
        width: 275px;
    }
`