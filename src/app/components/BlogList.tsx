import React from 'react';
import Image from "next/image";
import img1 from "../../../public/img/IMG_8438 1.png"
import img2 from "../../../public/img/IMG_9152 1.png"
import img3 from "../../../public/img/IMG_9508 1.png"
import arrowRight from "../../../public/img/arrowRight.png";

const BlogList = () => {
    return (
        <>
            <div className="blog">
                <h1 className='blog__title'>Latest blog</h1>
                <div className="blog__table">
                    <div className="card mb-3 border-light blog__table__item">
                        <Image src={img1} alt="" className="card-img-top blog__table__img"/>
                        <div className="card-body">
                            <h5 className="card-title blog__table__title">Uncovering the Hidden Costs of Power Washing Your Home</h5>
                            <p className="card-text blog__table__text">If you’re a homeowner looking to spruce up your curb appeal or a
                                marketer trying to make sure their clients get the best bang for..</p>
                            <p className="card-text"><small className="blog__table__small">Learn more</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 border-light blog__table__item">
                        <Image src={img2} alt="" className="card-img-top blog__table__img"/>
                        <div className="card-body">
                            <h5 className="card-title blog__table__title">How Much Does House Power Washing Cost ? </h5>
                            <p className="card-text blog__table__text">Are you looking to freshen up the exterior of your home? Pressure washing a house is an essential part of maintaining its condition...</p>
                            <p className="card-text"><small className="blog__table__small">Learn more</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 border-light blog__table__item">
                        <Image src={img3} alt="" className="card-img-top blog__table__img"/>
                        <div className="card-body">
                            <h5 className="card-title blog__table__title">How Much Does It Cost to Get Your House Power Washed? An Expert Guide</h5>
                            <p className="card-text blog__table__text">If you’re looking to spruce up the exterior of your home or business in preparation for the upcoming season, power washing may
                                be a...</p>
                            <p className="card-text"><small className="blog__table__small">Learn more</small></p>
                        </div>
                    </div>
                </div>
                <button className="main__info__button">Read more <Image src={arrowRight} alt='arrow icon'/></button>
            </div>
        </>
    )
}

export default BlogList