"use client"
import React, {useRef} from "react";
import "../../style/ReviewsList.css"
import Image from "next/image";
import arrowRightCircle from "../../public/img/Right circle icon (1).png";
import arrowLeft from "../../public/img/Right circle icon.png";
import starts from "../../public/img/stars.png";
import icon2 from "../../public/img/Ellipse 1435.png"
import icon1 from "../../public/img/Ellipse 1436.png"
import arrowRight from "../../public/img/arrowRight.png";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css";

const ReviewsList = () => {
    const slider = useRef(null);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green"}}
                onClick={onClick}
            />
        );
    }

        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow />
        };
    return (
        <>
            <div className='reviews'>
                <h1 className="reviews__title">Our happy clients</h1>
                    <div className="slider__buttons">
                        <button className="reviews__button" onClick={() => slider.current.slickPrev()}>
                            <Image src={arrowLeft} alt=""/>
                        </button>
                        <button className="reviews__button" onClick={() => slider.current.slickNext()}>
                            <Image src={arrowRightCircle} alt=""/>
                        </button>
                    </div>

                    <Slider ref={slider} {...settings}>
                        <div className="card reviews__table__item">
                            <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted reviews__table__text">AMAZING SERVICE! We
                                        desperately needed our driveway cleaned and this company came to the rescue! We had many
                                        stains,
                                        and they left our pavement super clean. THANK YOU!</h6>
                                    <div className="reviews__table__content">
                                        <Image src={icon1} alt=""/>
                                        <div className="reviews__table__user">
                                            <h2>Mariah R</h2>
                                            <Image src={starts} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card reviews__table__item">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted reviews__table__text">Sudsy did amazing! My
                                        driveway and sidewalk
                                        look great!
                                        They were even able to lighten up the awful grease stains on my driveway. Definitely
                                        recommend.</h6>
                                    <div className="reviews__table__content">
                                        <Image src={icon2} alt=""/>
                                        <div className="reviews__table__user">
                                            <h2>Nichole Richardson</h2>
                                            <Image src={starts} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Slider>

                <button className="main__info__button">Learn more <Image src={arrowRight} alt='arrow icon'/></button>
            </div>
        </>
    )
}

export default ReviewsList;
