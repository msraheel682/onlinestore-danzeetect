import React from 'react'
import './Popular.css'
import { Divider } from 'antd'

const PopularItems = () => {
    return (
        <>
            <div className='popular-items'>
                <h2>Our Popular Items</h2>
                <Divider />
                <div class="ag-offer-block">
                    <div class="ag-format-container">
                        <ul class="ag-offer_list">
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">
                                        Item name
                                    </div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                    </p>
                                </div>
                            </li>
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-2.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">
                                        Item name
                                    </div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                    </p>
                                </div>
                            </li>
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-3.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">
                                        Item name
                                    </div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                    </p>
                                </div>
                            </li>
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-4.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">
                                        Item name
                                    </div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.
                                    </p>
                                </div>
                            </li>
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-5.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">
                                        Item name
                                    </div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.
                                    </p>
                                </div>
                            </li>
                            <li class="ag-offer_item">
                                <div class="ag-offer_visible-item">
                                    <div class="ag-offer_img-box">
                                        <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-6.svg" class="ag-offer_img" alt="" />
                                    </div>
                                    <div class="ag-offer_title">  Item name</div>
                                </div>
                                <div class="ag-offer_hidden-item">
                                    <p class="ag-offer_text">
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularItems