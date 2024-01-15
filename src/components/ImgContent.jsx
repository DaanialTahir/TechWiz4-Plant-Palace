import React, { useEffect } from 'react'

import "./Home.css"
import banner1 from "../assets/banner1.webp"
import banner2 from "../assets/banner2.webp"
import AOS from "aos";
import "aos/dist/aos.css";

const ImgContent = () => {
    useEffect(() => {
      
        AOS.init();
        AOS.refresh();
    
    }, [])
    return (
        <div className="container Body_All">
            <div className="row px-md-5">
                <div className="col-lg-12" data-aos="fade-up" data-aos-duration={2000}>
                    <p className="text-center fs-2 fw-bold pt-5 text-success">
                        {" "}
                        Where Every Leaf Tells a Story: Unveiling the World of Plants Through
                        Knowledge, Diversity, and Awe-inspiring Greenery.
                    </p>
                </div>
            </div>
            <div className="row p-md-5">
                <div
                    className="col-lg-6 py-md-2 "
                    data-aos="fade-up"
                    data-aos-duration={2000}
                >
                    <div
                        className="card text-bg-dark border-0"
                        style={{ boxShadow: "0px 1px 10px 1px rgba(39, 39, 39, 0.61)" }}
                    >
                        <img src={banner1} className="card-img" alt="img" />
                        <div className="card-img-overlay py-md-2 my-md-4">
                            <h5 className="card-title text-muted fs-6">Big Sale Products</h5>
                            <p className="card-text text-muted fs-2">
                                Plants <br />
                                For Interior
                            </p>
                            <a
                                href="#"
                                className="card-text fw-bold text-decoration-none Body_2_Btn"
                                style={{ borderBottom: "3px solid darkgreen" }}
                            >
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="col-lg-6 py-md-2"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                >
                    <div
                        className="card text-bg-dark border-0"
                        style={{ boxShadow: "0px 1px 10px 1px rgba(39, 39, 39, 0.61)" }}
                    >
                        <img src={banner2} className="card-img" alt="img" />
                        <div className="card-img-overlay py-md-2 my-md-4">
                            <h5 className="card-title text-muted fs-6">Top Products</h5>
                            <p className="card-text text-muted fs-2">
                                Plants <br />
                                For Healthy
                            </p>
                            <a
                                href="#"
                                className="card-text fw-bold text-decoration-none Body_2_Btn"
                                style={{ borderBottom: "3px solid darkgreen" }}
                            >
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImgContent