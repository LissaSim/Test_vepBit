import React from "react";
import Link from "next/link";
import logo from '../../public/img/SUDSY PROWASH_new logo-05 1.png'
import arrow from "../../public/img/Symbol.png";
import arrowRight from "../../public/img/arrowRight.png"
import Image from "next/image";
import "../../style/Header.css"
const Header = () => {
    return(
        <header>
            <Image src={logo} alt='' className='header__logo'/>
            <div className=''>
                <ul className='nav__list'>
                    <li className='nav__list__item--active'><Link href="/">Home</Link></li>
                    <li className='nav__list__item'><Link href="/">About</Link></li>
                    <li className='nav__list__item'><Link href="/"><em>Services <Image src={arrow} alt='arrow'/></em></Link></li>
                            {/*add active*/}
                    {/*<li className='nav__list__item active'>*/}
                    {/*    <ul className="list-group">*/}
                    {/*        <li className="list-group-item">First</li>*/}
                    {/*        <li className="list-group-item">Second</li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li className='nav__list__item'><Link href="/">Gallery</Link></li>
                    <li className='nav__list__item'><Link href="/">Reviews</Link></li>
                    <li className='nav__list__item'><Link href="/">Blog</Link></li>
                    <li className='nav__list__item'><Link href="/">Contacts</Link></li>
                </ul>
            </div>
            <button className='header__button'>Get An Instant Quote<Image src={arrowRight} alt='btn learm more'/></button>
        </header>
    )
}

export default Header