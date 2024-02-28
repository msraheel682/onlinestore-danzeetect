import React from 'react'
import './HomePage.css';
import HeroSection from './herosection/HeroSection'
import CardServices from './services/Card';
import PopularItems from './sales/PopularItems';
import ReviewClient from './review/Review';
import AboutUs from './about/AboutUs';

const HomePages = () => {
    return (
        <>
            <HeroSection/>
            <CardServices/>
            <PopularItems/>
            <ReviewClient/>
            <AboutUs/>
        </>
    )
}

export default HomePages