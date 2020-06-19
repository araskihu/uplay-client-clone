import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// images
import acValhalla from '../img/news/acvalhallapreorder.jpg';
import springPromo from '../img/news/springsalepromocode.jpg';
import OperationSteelWave from '../img/news/R6_Live_Y5S2_SteelWave_1504x282.jpg';
import LastMonthInPC from '../img/news/TMIP_April20_1504x282_Featured.jpg';
import CityRush from '../img/news/TC2_CITY_RUSH_UPLAY_1504x282px.jpg';
import WomenOfUbisoft from '../img/news/1504x282_featured_.png';
import FreeTourClaim from '../img/news/1504x282_Discovery_Tour_Claim_For_Free.png';

const carouselNews = ['Rainbow Six Siege - Operation Steel Wave', 'Claim Discovery Tour: Ancient Egypt + Discovery Tour: Ancient Greece for Free',
                        'NGON - Last Month in PC - April 2020', 'The Crew 2 - This Week In TC2 - City Rush', 'Woman of Ubisoft - Coralie Zaza'];

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCarouselID: 0
        };
        this.myRef = React.createRef();
    }
    
    componentDidMount() {
        let carouselData = document.getElementsByClassName('carousel-status');
        if(carouselData.length <= 0) return;
        let id = parseInt(carouselData[0].innerHTML.split(' ')[0]) - 1;
        this.getCurrentCarouselTitle(id);
        carouselData[0].addEventListener('DOMSubtreeModified', (e) => {
            id = parseInt(carouselData[0].innerHTML.split(' ')[0]) - 1;
            this.getCurrentCarouselTitle(id);
        });
    }

    getCurrentCarouselTitle(id) {
        this.setState({
            currentCarouselID: id
        });
    }

    render() {
        return (
            <div className="container">
                <div className="news-header">
                    <div className="card-box-container">
                        <div className="card-box">
                            <img className="news-banner" src={acValhalla} alt="ac valhalla" />
                            <h4 className="news-title">Get a preorder discount!</h4>
                        </div>
                    </div>
                    <div className="card-box-container">
                        <div className="card-box">
                            <img className="news-banner" src={springPromo} alt="spring promo code" />
                            <h4 className="news-title">Enjoy a 20% discount on your next purchase with the code SPRING20</h4>
                        </div>
                    </div>
                    <div className="card-box-container">
                        <div className="card-box">
                            <Carousel autoPlay infiniteLoop emulateTouch showThumbs={false} interval={12000} showStatus={true} ref={this.myRef}>
                                <div>
                                    <img className="news-banner" src={OperationSteelWave} alt="" />
                                </div>
                                <div>
                                    <img className="news-banner" src={FreeTourClaim} alt="" />
                                </div>
                                <div>
                                    <img className="news-banner" src={LastMonthInPC} alt="" />
                                </div>
                                <div>
                                    <img className="news-banner" src={CityRush} alt="" />
                                </div>
                                <div>
                                    <img className="news-banner" src={WomenOfUbisoft} alt="" />
                                </div>
                            </Carousel>
                            <h4 className="news-title" id="carousel-title">{ carouselNews[this.state.currentCarouselID] }</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;