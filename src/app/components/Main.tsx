
import React from "react";
import Image from "next/image";
import arrowRight from "../../../public/img/arrowRight.png";
import aboutUsImg from "../../../public/img/IMG_8438 1.png";
import icon1 from "../../../public/img/Icon_300px-01 1.png";
import icon2 from "../../../public/img/Icon_300px-02 1.png";
import icon3 from "../../../public/img/Icon_300px-03 1.png";
import icon4 from "../../../public/img/Icon_300px-04 1.png";
import icon5 from "../../../public/img/Icon_300px-05 1.png";
import icon6 from "../../../public/img/Icon_300px-06 1.png";

const Main = () => {
    return (
        <>
            <main>
                <div className='main__content'>
                    <h1 className='title1'>is your property in need of</h1>
                    <h1 className='title2'>cleaning?</h1>
                    <h1 className='title3'>sudsy ducky <em>to the</em> rescue</h1>
                    <button className='header__button'>Get An Instant Quote <Image src={arrowRight} alt='arrow icon' /></button>
                </div>
            </main>
            <div className='main__info'>
                <div className="main__info__descr">
                    <h1 className='main__info__title'>Sudsy Prowash</h1>
                    <h3>is a family-operated business dedicated to delivering the highest standard of exterior cleaning services to our valued clients.
                        We employ eco-friendly chemicals and utilize the finest in soft and pressure washing technology, aiming to transform properties requiring exterior cleaning.</h3>
                    <button className="main__info__button">Learn more <Image src={arrowRight} alt='arrow icon' /></button>
                </div>
                <Image src={aboutUsImg} alt="About Us Image" />
            </div>
            <div className="main__list">
                <div className="main__list__container">
                    <ul className="main__list">
                        <li className="main__item"><Image src={icon1} alt=""/><h3>Experienced and Professional Technicians</h3>
                        </li>
                        <li className="main__item"><Image src={icon2} alt=""/><h3>State-of-the-art soft and pressure washing
                            equipment</h3></li>
                        <li className="main__item"><Image src={icon3} alt=""/><h3>Use of Environmentally Friendly Products</h3>
                        </li>
                        <li className="main__item"><Image src={icon4} alt=""/><h3>Fully Certified and Insured for your peace of
                            mind</h3></li>
                        <li className="main__item"><Image src={icon5} alt=""/><h3>Competitive Pricing</h3></li>
                        <li className="main__item"><Image src={icon6} alt=""/><h3>100% Satisfaction Guarantee</h3></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Main;
