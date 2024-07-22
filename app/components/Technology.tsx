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
                    <h1 className="technology__title">Expert-grade soft and pressure washing technology.</h1>
                    <div className="technology__content">
                        <div className="technology__descr">
                            <p>Sudsy Prowash employs the most advanced technology available
                                in
                                the
                                realms of soft and pressure washing equipment.</p>
                          <p>  The highest quality, and effective chemicals for optimal cleanliness.
                              This combination allows us to perform an outstanding job, ensuring your home or commercial
                              property
                              is cleaned to the highest possible standard.</p>
                        </div>
                        <button className='header__button'>Get An Instant Quote <Image src={arrowRight} alt='arrow icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology