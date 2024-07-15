import React from "react";
import icon1 from "../../../public/img/Icon_300px-07 1.png";
import icon2 from "../../../public/img/Icon_300px-08 1.png";
import icon3 from "../../../public/img/Icon_300px-09 1.png";
import icon4 from "../../../public/img/Icon_300px-10 1.png";
import icon5 from "../../../public/img/Icon_300px-11 1.png";
import icon6 from "../../../public/img/Icon_300px-12 1.png";
import icon7 from "../../../public/img/Icon_300px-13 1.png";
import icon8 from "../../../public/img/Icon_300px-14 1.png";
import Image from "next/image";
import arrowRight from "../../../public/img/arrowRight.png";

const Services = () => {
    return (
        <div className='services'>
            <h1 className="main__info__title">Services</h1>
            <div className="services__title">
                <div className="services__descr-container">
                    <h3 className="services__descr">Residential</h3>
                    <div className="services__line"></div>
                </div>
                <div className="services__descr-container">
                    <h3 className="services__descr">Commercial</h3>
                    <div className="services__line2"></div>
                </div>
            </div>
            <div className="services__table">
                <div className="services__column">
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon1} alt="icon1" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Roof Washing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon2} alt="icon2" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">House Washing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon3} alt="icon3" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Driveway and flat surface
                                        cleaning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon4} alt="icon4" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Window Cleaning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services__column">
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon5} alt="icon5" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Screen Cleaning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon6} alt="icon6" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Solar Panel Cleaning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon7} alt="icon7" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Fence Cleaning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-light services__table__item">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={icon8} alt="icon8" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title services__table__title">Other Services</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="main__info__button">Learn more <Image src={arrowRight} alt='arrow icon'/></button>
        </div>
    );
}

export default Services;
