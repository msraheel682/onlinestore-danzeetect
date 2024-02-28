import React from 'react'
import './About.css'
import { Divider } from 'antd'

const AboutUs = () => {
    return (
        <>
            <div class="about">
            <h2>About US</h2>
            <Divider/>
                <section class="about-section" id="about">
                <span className='overlay'></span>
                    <div class="container">
                        <div class="about-content">
                            <div class="about-text">
                                <h4 class="about-heading">About Title</h4>
                                <p style={{textAlign:'justify'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                                <button class="btn">Read more</button>
                            </div>
                            {/* <div class="about-image">
                                <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="" class="img-fluid" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AboutUs