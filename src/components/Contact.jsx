import React, {useEffect} from 'react'
import "./Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Footer';
const Contact = () => {
    useEffect(() => {
      
        AOS.init();
        AOS.refresh();
    
    }, [])
    return (
        <>
            <>
                <div className="container-fluid pt-5">
                    <div className="row d-flex justify-content-center pt-5">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={2000}>
                            <p className="text-center display-5 fw-bolder pt-5 text-success">
                                Shoot us a note!
                            </p>
                        </div>
                        <div
                            className="col-lg-12 py-3  animate__fadeI"
                            data-aos="fade-down"
                            data-aos-duration={2000}
                        >
                            <p className="text-center fs-5 fw-lighter">
                                We try our best to get back to you within 24 hours.
                            </p>
                        </div>
                        <div className="container-fluid px-5 py-5">
                            <div className="row flex-row align-content-center">
                                <div className="col-lg-6 py-3" style={{ position: "relative" }}>
                                    <div style={{ overflow: "hidden" }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924244.0619641689!2d66.59499551729773!3d25.192146526892635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1690560441133!5m2!1sen!2s"
                                            width={600}
                                            height={450}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="col-lg-6  animate__fadeInRigh"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                >
                                    <div className="text-left">
                                        <form className="row g-5">
                                            <div className="col-lg-6">
                                                <label
                                                    htmlFor="validationDefault01"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text0"
                                                    className="form-control p-3 bg-light fw-bold"
                                                    id="validationDefault01"
                                                    style={{ color: "#979696" }}
                                                    placeholder="First Name"
                                                    required
                                                    pattern="[a-zA-Z. ]{3,20}"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <label
                                                    htmlFor="validationDefault02"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control p-3 bg-light fw-bold"
                                                    id="validationDefault02"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Last Name"
                                                    required
                                                    pattern="[A-Za-z]{3,20}"
                                                />
                                            </div>
                                            <div className="col-lg-6">
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
                                                    pattern='[a-zA-Z_]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}'
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <label
                                                    htmlFor="validationDefault04"
                                                    className="form-label py-2 fw-light"
                                                   
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control p-3 bg-light fw-bold"
                                                    id="validationDefault04"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Phone Number"
                                                    required=""
                                                    pattern="[0-9]{11}"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <label
                                                    htmlFor="validationDefault07"
                                                    className="form-label py-2 fw-light"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control h-100 bg-light fw-bold"
                                                    style={{ color: "#979696" }}
                                                    placeholder="Message"
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
                                                <button className="btn btn-lg align-content-center rounded-pill px-5 py-3 m-5 fw-bold fs-6 Body_5_Btn" type='submit' >
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
                {/* HEADER */}
                {/* FOOTER */}
               <Footer />
                
            </>

        </>
    )
}

export default Contact