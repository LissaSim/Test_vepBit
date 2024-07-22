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
import Link from "next/link";

const Footer = () => {
    return(
        <footer>
            <div className="footer__wrapper">
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Quick links</p></li>
                    <li className="footer__list__item"><Link href={'/'}>Home</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>About</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>Services</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>Gallery</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>Reviews</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>Blog</Link></li>
                    <li className="footer__list__item"><Link href={'/'}>Contacts</Link></li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Services</p></li>
                    <li className="footer__list__item">
                        <Link href={'/'}><em>Residential<Image src={arrowDown} alt="arrow down"/></em></Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href={'/'}>
                            <em>Commercial<Image src={arrowDown} alt="arrow down"/></em>
                        </Link>
                    </li>
                </ul>
                <ul className='footer__list'>
                    <li className="footer__list__item"><p>Contact</p></li>
                    <li className="footer__list__item"><em><Image src={icon1} alt="Location"/>128 Orange Ave Daytona
                        Beach, FL
                        32114</em></li>
                    <li className="footer__list__item"><em><Image src={icon2} alt="Number"/>888-SUDSYPRO</em></li>
                    <li className="footer__list__item"><em><Image src={icon3} alt="Email"/>info@sudsyprowash.com</em>
                    </li>
                </ul>
            </div>
            <div className="footer__line"></div>
            <div className="footer__contacts">
                <Link href={"/"}><Image src={logo} alt=""/></Link>
                <div className='footer__container'>
                    <Image src={img} alt="Guarantee" className="footer__img"/>
                    <ul className="footer__contacts__list">
                        <li className="footer__contacts__list__item"><Link href={'/'}><Image src={facebook}
                                                                                             alt="Facebook"/></Link>
                        </li>
                        <li className="footer__contacts__list__item"><Link href={'/'}><Image src={instagram}
                                                                                             alt="Instagram"/></Link>
                        </li>
                        <li className="footer__contacts__list__item"><Link href={'/'}><Image src={twitter}
                                                                                             alt="Twitter"/></Link></li>
                        <li className="footer__contacts__list__item"><Link href={'/'}><Image src={youtube}
                                                                                             alt="YouTube"/></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer