import React from 'react'
import Footer from './Footer'
import { NavLink } from "react-router-dom";

const SiteMap = () => {
    return (
        <>
            <section>
                <div className="container mt-5 pt-5 px-0">
                    <div className="row">
                    <h1>Site Map</h1>
                        <div className="col-lg-4 col-sm-12 mt-3">
                            <h6 className="text-uppercase text-success fw-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pe-3"
                                    height="1.5em"
                                    viewBox="0 0 448 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>{" "}
                                navigations
                            </h6>
                            <hr />
                            <ul style={{ listStyle: "none" }} className="ps-2">
                                <li>
                                    <NavLink to="/" className="nav-link py-1 Body_2_Btn">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="nav-link py-1 Body_2_Btn">
                                        About
                                    </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/contact" className="nav-link py-1 Body_2_Btn">
                                        Contact
                                    </NavLink>
                                </li>
                              
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-3">
                            <h6 className="text-uppercase text-success fw-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pe-3"
                                    height="1.25em"
                                    viewBox="0 0 640 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
                                </svg>{" "}
                                catalog
                            </h6>
                            <hr />
                            <ul className="ps-2" style={{ listStyle: "none" }}>
                                <li>
                                    <NavLink to="/flower" className="nav-link py-1 Body_2_Btn">
                                        Flowering Shrubs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/indoor" className="nav-link py-1 Body_2_Btn">
                                        Indoor Plants
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/suclent" className="nav-link py-1 Body_2_Btn">
                                        Succulent PLants
                                    </NavLink>
                                </li>
                              
                            </ul>
                        </div>
                     
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SiteMap