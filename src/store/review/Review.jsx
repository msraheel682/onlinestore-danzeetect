import React from 'react'
import './Review.css';
import { useState, useEffect } from 'react';
import { Divider } from 'antd';

const ReviewClient = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    const testimonials = [
        {
            name: 'Miyah Myles',
            position: 'Marketing',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'June Cha',
            position: 'Software Engineer',
            photo: 'https://randomuser.me/api/portraits/women/44.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'Iida Niskanen',
            position: 'Data Entry',
            photo: 'https://randomuser.me/api/portraits/women/68.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'Renee Sims',
            position: 'Receptionist',
            photo: 'https://randomuser.me/api/portraits/women/65.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'Jonathan Nunfiez',
            position: 'Graphic Designer',
            photo: 'https://randomuser.me/api/portraits/men/43.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'Veeti Seppanen',
            position: 'Director',
            photo: 'https://randomuser.me/api/portraits/men/97.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 10000);

        return () => clearInterval(interval);
    }, [testimonials.length]);


    useEffect(() => {
        const timeout = setTimeout(() => {
          setProgressBarWidth(100); 
        }, 100); 
        
        console.log(progressBarWidth);
        return () => clearTimeout(timeout);
      }, [testimonialIndex]);

    const { name, position, photo, text } = testimonials[testimonialIndex];

    const handleNext = () => {
        setTestimonialIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrev = () => {
        setTestimonialIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className='review'>
            <h1>Review</h1>
            <Divider/>
                <div className="testimonial-container">
                    <div className="progress-bar"></div>
                    <div className="fas fa-quote-right fa-quote"></div>
                    <div className="fas fa-quote-left fa-quote"></div>
                    <p className="testimonial">{text}</p>
                    <div className="user">
                        <img src={photo} alt="user" className="user-image" />
                        <div className="user-details">
                            <h4 className="username">{name}</h4>
                            <p className="role">{position}</p>
                        </div>
                    </div>
                    <button className="next-button" onClick={handlePrev}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <button className="next-button" onClick={handleNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReviewClient