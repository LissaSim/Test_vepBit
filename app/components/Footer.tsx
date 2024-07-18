import React from "react";
import "../../style/Footer.css"
import arrowDown from "../../public/img/Symbol.png";
import icon1 from "../../public/img/Vector.png";
import icon2 from "../../public/img/Vector (1).png";
import icon3 from "../../public/img/Vector (2).png";
import img from "../../public/img/100_ badge_transparent background-01 1.png";
import logo from "../../public/img/SUDSY PROWASH_new logo-05 1.png"
import twitter from "../../public/img/ri_twitter-fill.png";
import youtube from "../../public/img/mdi_youtube.png";
import facebook from "../../public/img/fa_facebook.png";
import instagram from "../../public/img/streamline_instagram-solid.png"
import Image from "next/image";

const Footer = () => {
    return(
        <footer>
            <div className="footer__wrapper">
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Quick links</p></li>
                    <li className="footer__list__item">Home</li>
                    <li className="footer__list__item">About</li>
                    <li className="footer__list__item">Services</li>
                    <li className="footer__list__item">Gallery</li>
                    <li className="footer__list__item">Reviews</li>
                    <li className="footer__list__item">Blog</li>
                    <li className="footer__list__item">Contacts</li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Services</p></li>
                    <li className="footer__list__item"><em>Residential<Image src={arrowDown} alt="arrow down"/></em></li>
                    <li className="footer__list__item"><em>Commercial<Image src={arrowDown} alt="arrow down"/></em></li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Contact</p></li>
                    <li className="footer__list__item"><em><Image src={icon1} alt="Location"/>128 Orange Ave Daytona Beach, FL
                        32114</em></li>
                    <li className="footer__list__item"><em><Image src={icon2} alt="Number"/>888-SUDSYPRO</em></li>
                    <li className="footer__list__item"><em><Image src={icon3} alt="Email"/>info@sudsyprowash.com</em></li>
                </ul>
            </div>
            <Image src={img} alt="Guarantee" className="footer__img"/>
            <div className="footer__line"></div>
            <div className="footer__contacts">
                <Image src={logo} alt=""/>
                <ul className="footer__contacts__list">
                    <li className="footer__contacts__list__item"><Image src={facebook} alt="Facebook"/></li>
                    <li className="footer__contacts__list__item"><Image src={instagram} alt="Instagram"/></li>
                    <li className="footer__contacts__list__item"><Image src={twitter} alt="Twitter"/></li>
                    <li className="footer__contacts__list__item"><Image src={youtube} alt="YouTube"/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer