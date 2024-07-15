import React from "react";
import Link from "next/link";
import logo from '../../../public/img/SUDSY PROWASH_new logo-05 1.png'
import arrow from "../../../public/img/Symbol.png";
import arrowRight from "../../../public/img/arrowRight.png"
import Image from "next/image";
const Header = () => {
    return(
        <header>
            <Image src={logo} alt='' />
            <div className=''>
                <ul className='nav__list'>
                    <li className='nav__list__item--active'><Link href="/">Home</Link></li>
                    <li className='nav__list__item'><Link href="/">About</Link></li>
                    <li className='nav__list__item'><Link href="/"><em>Services <Image src={arrow} alt=''/></em></Link></li>
                    <li className='nav__list__item'><Link href="/">Gallery</Link></li>
                    <li className='nav__list__item'><Link href="/">Reviews</Link></li>
                    <li className='nav__list__item'><Link href="/">Blog</Link></li>
                    <li className='nav__list__item'><Link href="/">Contacts</Link></li>
                </ul>
            </div>
            <button className='header__button'>Get An Instant Quote <Image src={arrowRight} alt=''/></button>
        </header>
    )
}

export default Header