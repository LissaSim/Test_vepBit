import React from "react";
import "../../style/Technology.css"
import Image from "next/image";
import technologyImg from "../../public/img/Sudsy Truck and trailer  1.png"
import arrowRight from "../../public/img/arrowRight.png";

const Technology = () => {
    return(
        <>
            <div className="technology">
                <Image src={technologyImg} alt="technology" className="technology__img"/>
                <div className="technology__content__wrapper">
                    <div className="technology__content">
                        <h1 className="technology__title">Expert-grade soft and pressure washing technology.</h1>
                        <h3 className="technology__descr">Sudsy Prowash employs the most advanced technology available
                            in
                            the
                            realms of soft and pressure washing equipment.
                            The highest quality, and effective chemicals for optimal cleanliness.
                            This combination allows us to perform an outstanding job, ensuring your home or commercial
                            property
                            is cleaned to the highest possible standard.</h3>
                        <button className='header__button'>Get An Instant Quote <Image src={arrowRight} alt='arrow icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology