import { FileAddFilled } from '@ant-design/icons'
import { Divider } from 'antd';
import './Card.css';
import React from 'react'

const CardServices = () => {
    return (
        <>
           
            <div className='services'>
            <h2>Services</h2>
            <Divider/>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <FileAddFilled />
                        </div>
                        <div className='text'>
                            Visit our Snacks  portion <br /> for consultency
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardServices