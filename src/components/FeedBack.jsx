import React from 'react'
import Footer from './Footer'

const FeedBack = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row d-flex justify-content-center pt-5">
                    <div className="col-lg-12" data-aos="fade-down" data-aos-duration={2000}>
                        <p className="text-center display-5 fw-bolder pt-5 text-success">
                            Give Us Your Feedback!
                        </p>
                    </div>
                    <div className="container-fluid px-5 py-5">
                        <div className="d-flex justify-content-center row flex-row align-content-center">
                            <div className="card col-lg-6 col-md-12 p-md-5">
                                <div
                                    className="col-lg-12 animate__fadeInRigh"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                >
                                    <div className="text-left">
                                        <form className="row g-5">
                                            <div className="col-lg-12">
                                                <label
                                                    htmlFor="validationDefault01"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text0"
                                                    className="form-control p-3 bg-light fw-bold"
                                                    id="validationDefault01"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Full Name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <label
                                                    htmlFor="validationDefault03"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control p-3 bg-light fw-bold"
                                                    id="validationDefault03"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Email"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <label
                                                    htmlFor="validationDefault07"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    Give Your Feedback
                                                </label>
                                                <textarea
                                                    className="form-control h-100 bg-light fw-bold"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Give Your Feedback"
                                                    id="floatingTextarea"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div
                                                className="col-lg-12 d-flex justify-content-center "
                                                data-aos="fade-right"
                                                data-aos-duration={2000}
                                            >
                                                <button className="btn btn-lg align-content-center rounded-pill px-5 py-3 m-5 fw-bold fs-6 Body_5_Btn">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FeedBack