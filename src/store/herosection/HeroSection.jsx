import React from 'react'
import { CheckOutlined } from '@ant-design/icons';
import { Avatar, Col, Input, Row } from 'antd';
import img  from '../../images/c.webp'
import banner from '../../images/hero.jpg'
const { Search } = Input;

const HeroSection = () => {
    return (
        <>
            <div className='hero-section'>
                <Row justify={'space-between'} align={'middle'} gutter={[16, 16]}>
                    <Col xs={{ span: 24, offset: 1, }} sm={{ span: 24, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2, }} >
                        <div className='hero-text'>
                            <div className='heading'>
                                <h1>Let your <span>Store </span>come to you</h1>
                                <p>Get fresh items online without shoping
                                    Get fresh items online without shoping</p>
                            </div>
                            <div className='search'>
                                <Search placeholder="input search text" />
                            </div>
                            <div className='checkbox'>
                                <div className='first'>
                                    <div><Avatar size={20} icon={<CheckOutlined />} />Fresh Snacks</div>
                                    <div><Avatar size={20} icon={<CheckOutlined />} />Fresh Snacks</div>
                                </div>
                                <div className='second'>
                                    <div><Avatar size={20} icon={<CheckOutlined />} />Fresh Snacks</div>
                                    <div><Avatar size={20} icon={<CheckOutlined />} />Fresh Snacks</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 24, offset: 2, }} sm={{ span: 24, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2, }} >
                        <div className='hero-image'>
                            <img src={'https://img.freepik.com/free-photo/handsome-man-pointing-lateral_1368-5182.jpg?size=626&ext=jpg&ga=GA1.1.1737653136.1695980478&semt=ais'} alt='aa' />
                        </div>
                    </Col>
                    <Col xs={{ span: 24, offset: 1, }} sm={{ span: 24, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2, }} >
                        <div className='product-section'>
                            <div className='img-1'>
                                <img src={img} alt='sss' />
                                <b>Snacks<br /></b><span>RS:890</span>
                            </div>
                            <div className='img-1'>
                                <img src={img} alt='sss' />
                                <b>Snacks<br /></b><span>RS:890</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HeroSection