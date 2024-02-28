import { Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const Services = () => {
    return (
        <>
            <div className='services'>
                {/* <h1>Services</h1> */}
                <div className='first'>
                    <Row justify={'space-between'} align={'middle'} gutter={[32, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                       <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                       <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='second'>
                    <Row justify={'space-between'} align={'middle'} gutter={[32, 16]}>
                       <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                       <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                       <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8}}>
                            <Card
                                hoverable
                                style={{ width: 269 }}
                                cover={
                                    <div class="hover01 column">
                                        <div>
                                            <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                                        </div>
                                    </div>} >
                                <Meta title="Snacks" description="view more" align='center' />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Services