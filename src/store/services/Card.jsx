// import { FileAddFilled } from '@ant-design/icons'
import { Divider } from 'antd';
import './Card.css';
import React from 'react'

const CardServices = () => {
    return (
        <>

            <div className='services'>
                <h2>Services</h2>
                <Divider />
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <i class="ri-smartphone-line"></i>
                        </div>
                        <div className='text'>
                            Mobile Application
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <i class="ri-window-line"></i>
                        </div>
                        <div className='text'>
                            Web Application
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                        <i class="ri-unsplash-fill"></i>
                        </div>
                        <div className='text'>
                            UI/UX Design
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                        <i class="ri-robot-2-line"></i>
                        </div>
                        <div className='text'>
                            AI (Artifiical Intelligence)
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                        <i class="ri-router-line"></i>
                        </div>
                        <div className='text'>
                            IoT (Internet of things)
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                        <i class="ri-folder-image-line"></i>
                        </div>
                        <div className='text'>
                            Figma Designs
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardServices