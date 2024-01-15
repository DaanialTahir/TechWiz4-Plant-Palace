import React, { useEffect } from 'react'

import "./Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
const Offer = () => {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, [])
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12 text-center py-4">
                    <h1 className="text-muted fw-bold text-uppercase">
                        Get <span style={{ color: "#198754" }}>20% Off</span> Your Next Order
                    </h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center rows">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <div className="input-group mb-3 mt-4">
                                <input
                                    type="text"
                                    className="form-control Body_5_Form"
                                    placeholder="Enter email"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button className="btn btn-success Body_5_Btn" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Offer