import React from 'react'
import "./Home.css";
import { NavLink } from "react-router-dom";
import pic1 from "../assets/Carousel_1.jpeg"
import pic2 from "../assets/Carousel_2.jpeg"


const Slider = () => {
    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide d-sm-none d-md-block d-none d-sm-block pb-5"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={pic2}
                            className="d-block w-100 kenburns-top"
                            alt="img"
                        />
                        <div className="carousel-caption d-block text-start mx-1 Header_carousel_caption">
                            <h1 className="text-dark display-2">TOP SALE</h1>
                            <p className="fs-3 text-dark fw-bolder">
                                Discount <span className="text-success">20% Off</span> For Plant
                                Palace Members
                            </p>
                            <NavLink to="/shop" className="btn btn-lg btn-dark rounded-pill py-3 px-4">
                                Discover Now
                            </NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={pic1}
                            className="d-block w-100 kenburns-top"
                            alt="img"
                        />
                        <div className="carousel-caption d-block text-start mx-1 Header_carousel_caption">
                            <h1 className="text-dark display-2">BIG SALE</h1>
                            <p className="fs-3 text-dark fw-bolder">
                                Discount <span className="text-success">20% Off</span> For Plant
                                Palace Members
                            </p>
                            <NavLink to="/shop" className="btn btn-lg btn-dark rounded-pill py-3 px-4">
                                Discover Now
                            </NavLink>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* next slider */}
            <div className="container-fluid p-0 m-0 d-xl-none d-lg-none d-xl-block d-md-none d-lg-block">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <img src="image/Carousel_2.jpeg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider