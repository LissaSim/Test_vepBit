
import React from "react";
import "../../style/Main.css"
import Image from "next/image";
import arrowRight from "../../public/img/arrowRight.png";
import aboutUsImg from "../../public/img/IMG_8438 1.png";
import icon1 from "../../public/img/Icon_300px-01 1.png";
import icon2 from "../../public/img/Icon_300px-02 1.png";
import icon3 from "../../public/img/Icon_300px-03 1.png";
import icon4 from "../../public/img/Icon_300px-04 1.png";
import icon5 from "../../public/img/Icon_300px-05 1.png";
import icon6 from "../../public/img/Icon_300px-06 1.png";

const Main = () => {
    return (
        <>
            <main>
                <div className='main__content'>
                    <h1 className='title1'>IS YOUR PROPERTY IN NEED OF</h1>
                    <p className='title2'>CLEANING?</p>
                    <p className='title3'>SUDSY DUCKY <em>TO THE</em> RESCUE</p>
                    <button className='header__button'>Get An Instant Quote <Image src={arrowRight} alt='arrow icon' /></button>
                </div>
            </main>
            <div className='main__info'>
                <div className="main__info__descr">
                    <h2 className='main__info__title'>Sudsy Prowash</h2>
                    <h3>is a family-operated business dedicated to delivering the highest standard of exterior cleaning services to our valued clients.
                        We employ eco-friendly chemicals and utilize the finest in soft and pressure washing technology, aiming to transform properties requiring exterior cleaning.</h3>
                    <button className="main__info__button">Learn more <Image src={arrowRight} alt='arrow icon' /></button>
                </div>
                <Image src={aboutUsImg} alt="About Us Image" />
            </div>
            <div className="main__list">
                <div className="main__list__container">
                    <ul className="main__list">
                        <li className="main__item"><Image src={icon1} alt="Experienced and Professional Technicians"/>
                            <p>Experienced and Professional Technicians</p>
                        </li>
                        <li className="main__item"><Image src={icon2} alt="pressure washingequipment"/>
                            <p>State-of-the-art soft and pressure washing equipment</p>
                        </li>
                        <li className="main__item"><Image src={icon3} alt="Use of Environmentally Friendly Products"/>
                            <p>Use of Environmentally Friendly Products</p>
                        </li>
                        <li className="main__item"><Image src={icon4} alt="Fully Certified and Insured for your peace of mind"/>
                            <p>Fully Certified and Insured for your peace of mind</p>
                        </li>
                        <li className="main__item"><Image src={icon5} alt="Competitive Pricing"/>
                            <p>Competitive Pricing</p>
                        </li>
                        <li className="main__item"><Image src={icon6} alt="Guarantee"/>
                            <p>100% Satisfaction Guarantee</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Main;
