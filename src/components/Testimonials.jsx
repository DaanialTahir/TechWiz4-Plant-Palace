import React, { useEffect } from 'react'

import "./Home.css";
import test1 from "../assets/Testemonies_1.avif"
import test2 from "../assets/Testemonies_2.avif"
import inverted from "../assets/Double_inverted_Quotation.webp"
import AOS from "aos";
import "aos/dist/aos.css";


const Testimonials = () => {
    useEffect(() => {
      
        AOS.init();
        AOS.refresh();
    
    }, [])
    return (
        <div className="container py-5">
            <div className="row p-lg-5">
                <div className="col-lg-12 text-center">
                    <h1
                        className="fw-bold display-5 text-uppercase"
                        style={{ color: "#198754" }}
                    >
                        What Our Customer Says ?
                    </h1>
                </div>
                <div className="col-lg-12">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center py-5">
                                    <img
                                        src={inverted}
                                        alt=""
                                        className="py-2"
                                    />
                                </div>
                                <p className="px-lg-5 py-lg-5">
                                    "I stumbled upon this plant website during my quest to transform
                                    my apartment into a lush oasis of greenery. Little did I know that
                                    it would become my ultimate guide and companion on this journey.
                                    The wealth of information, from detailed plant care guides to
                                    creative DIY projects, has empowered me to nurture my plants like
                                    never before. Not only have I discovered rare and beautiful plant
                                    species that I never knew existed, but I've also connected with a
                                    vibrant community of fellow plant enthusiasts. This website is
                                    more than just a platform; it's a sanctuary where my love for
                                    plants has truly blossomed."
                                </p>
                                <div className="d-flex justify-content-center py-3">
                                    <img src={test1} alt="" />
                                </div>
                                <p className="fw-light text-center">TORVI / CEO</p>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center py-5">
                                    <img
                                        src={inverted}
                                        alt=""
                                        className="py-2"
                                    />
                                </div>
                                <p className="px-lg-5 py-lg-5">
                                    "As an avid gardener for years, I thought I knew everything there
                                    was to know about plants. That was until I stumbled upon this
                                    incredible plant website. The dedication to sustainability and
                                    eco-friendly practices resonated deeply with me. The website's
                                    comprehensive plant database has expanded my knowledge,
                                    introducing me to species I hadn't encountered before. What sets
                                    this website apart is its commitment to not only offering
                                    top-notch plants but also nurturing a sense of belonging among
                                    plant lovers. The engaging forums, informative articles, and
                                    expert-led webinars have elevated my gardening game. This website
                                    has reinvigorated my passion for plants and connected me with a
                                    community that shares my values."
                                </p>
                                <div className="d-flex justify-content-center py-3">
                                    <img src={test2} alt="" />
                                </div>
                                <p className="fw-light text-center">NIROB KHAN / CFO</p>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonials