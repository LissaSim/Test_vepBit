import React from "react";
import arrowDown from "../../../public/img/Symbol.png";
import icon1 from "../../../public/img/Vector.png";
import icon2 from "../../../public/img/Vector (1).png";
import icon3 from "../../../public/img/Vector (2).png";
import img from "../../../public/img/100_ badge_transparent background-01 1.png";
import logo from "../../../public/img/SUDSY PROWASH_new logo-05 1.png"
import twitter from "../../../public/img/ri_twitter-fill.png";
import youtube from "../../../public/img/mdi_youtube.png";
import facebook from "../../../public/img/fa_facebook.png";
import instagram from "../../../public/img/streamline_instagram-solid.png"
import Image from "next/image";

const Footer = () => {
    return(
        <footer>
            <div className="footer__wrapper">
                <ul className='footer__list'>
                    <li className="footer__list__item"><h1>Quick links</h1></li>
                    <li className="footer__list__item">Home</li>
                    <li className="footer__list__item">About</li>
                    <li className="footer__list__item">Services</li>
                    <li className="footer__list__item">Gallery</li>
                    <li className="footer__list__item">Reviews</li>
                    <li className="footer__list__item">Blog</li>
                    <li className="footer__list__item">Contacts</li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><h1>Services</h1></li>
                    <li className="footer__list__item"><em>Residential<Image src={arrowDown} alt=""/></em></li>
                    <li className="footer__list__item"><em>Commercial<Image src={arrowDown} alt=""/></em></li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><h1>Contact</h1></li>
                    <li className="footer__list__item"><em><Image src={icon1} alt=""/>128 Orange Ave Daytona Beach, FL
                        32114</em></li>
                    <li className="footer__list__item"><em><Image src={icon2} alt=""/>888-SUDSYPRO</em></li>
                    <li className="footer__list__item"><em><Image src={icon3} alt=""/>info@sudsyprowash.com</em></li>
                </ul>
            </div>
            <Image src={img} alt="" className="footer__img"/>
            <div className="footer__line"></div>
            <div className="footer__contacts">
                <Image src={logo} alt=""/>
                <ul className="footer__contacts__list">
                    <li className="footer__contacts__list__item"><Image src={facebook} alt=""/></li>
                    <li className="footer__contacts__list__item"><Image src={instagram} alt=""/></li>
                    <li className="footer__contacts__list__item"><Image src={twitter} alt=""/></li>
                    <li className="footer__contacts__list__item"><Image src={youtube} alt=""/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer