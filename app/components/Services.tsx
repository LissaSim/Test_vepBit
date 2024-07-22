"use client"
import React from "react";
import "../../style/Services.css"
import icon1 from "../../public/img/Icon_300px-07 1.png";
import icon2 from "../../public/img/Icon_300px-08 1.png";
import icon3 from "../../public/img/Icon_300px-09 1.png";
import icon4 from "../../public/img/Icon_300px-10 1.png";
import icon5 from "../../public/img/Icon_300px-11 1.png";
import icon6 from "../../public/img/Icon_300px-12 1.png";
import icon7 from "../../public/img/Icon_300px-13 1.png";
import icon8 from "../../public/img/Icon_300px-14 1.png";
import Image from "next/image";
import arrowRight from "../../public/img/arrowRight.png";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {TabContainer, TabContent, TabPane, Nav} from "react-bootstrap";

const Services = () => {
    return (
        <div className="services">
            <h1 className="main__info__title">Services</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                   <Nav className="services__title">
                       <Nav variant="underline">
                           <Nav.Item>
                               <Nav.Link eventKey="first" className="services__descr__btn">
                                   <p className="services__descr">Residential</p>
                               </Nav.Link>
                           </Nav.Item>
                       </Nav>
                       <Nav variant="underline">
                           <Nav.Item variant="underline">
                               <Nav.Link eventKey="second" className="services__descr__btn">
                                   <p className="services__descr">Commercial</p>
                               </Nav.Link>
                           </Nav.Item>
                       </Nav>
                   </Nav>
                   <Tab.Content>
                       <Tab.Pane eventKey="first">
                           <div className="services__column">
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon1} alt="Roof Washing"
                                                  className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Roof Washing</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon3} alt="Driveway cleaning"
                                                  className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Driveway and flat surface
                                                   cleaning</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon5} alt="Screen Cleaning"
                                                  className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Screen Cleaning</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon7} alt="Fence Cleaning"
                                                  className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Fence Cleaning</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                           </div>
                       </Tab.Pane>
                       <Tab.Pane eventKey="second">
                           <div className="services__column">
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon2} alt="icon2" className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">House Washing</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon4} alt="icon4" className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Window Cleaning</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon6} alt="icon6" className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Solar Panel
                                                   Cleaning</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                               <button className="card border-light services__table__item">
                                   <div className="row g-0 services__table__content">
                                       <div className="col-md-4 services__table__img">
                                           <Image src={icon8} alt="icon8" className="img-fluid rounded-start"/>
                                       </div>
                                       <div className="col-md-8 services__table__text">
                                           <div className="card-body">
                                               <h5 className="card-title services__table__title">Other Services</h5>
                                           </div>
                                       </div>
                                   </div>
                               </button>
                           </div>
                       </Tab.Pane>
                   </Tab.Content>
            </Tab.Container>
            <button className="main__info__button">Learn more <Image src={arrowRight} alt='arrow icon'/>
            </button>
        </div>
    );
}

export default Services;