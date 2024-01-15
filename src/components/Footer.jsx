import React from 'react'
import "./Home.css"
import logo from "../assets/Plant_Palace_logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container-fluid pt-5 bg-light">
            <div className="row">
                <div className="col-lg-3">
                    <div className="d-flex justify-content-center">
                        <img
                            src={logo}
                            className="img-fluid px-auto"
                            style={{ height: "25vh", width: "30vh" }}
                            alt="logo"
                        />
                    </div>
                    <h6 className="pb-3 text-center" />
                    <ul className="list-unstyled d-flex justify-content-center pt-3">
                        <li className="px-3">
                            <NavLink to="https://web.whatsapp.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5em"
                                    viewBox="0 0 448 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="https://www.facebook.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5em"
                                    viewBox="0 0 512 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="https://twitter.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5em"
                                    viewBox="0 0 512 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="https://www.instagram.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5em"
                                    viewBox="0 0 448 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="https://www.youtube.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5em"
                                    viewBox="0 0 576 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className="text-uppercase pt-5 text-center fw-bold">Shop Online</h4>
                    <ul className="list-unstyled text-center">
                        <li className="pt-3">
                            <NavLink to="/flower">Flowering Shrubs</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/indoor">Indoor Plants</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/suclent">Succulent Plants</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className="text-uppercase pt-5 text-center fw-bold">Company</h4>
                    <ul className="list-unstyled text-center">
                        <li className="pt-3">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="/sitemap">SiteMap</NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className="text-uppercase pt-5 text-center fw-bold">Get In Touch</h4>
                    <ul className="list-unstyled text-center">
                        <li className="pt-3">
                            <NavLink to="#" className="Body_2_Btn text-decoration-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                                Pakistan, Karachi, Aptech-MSG
                            </NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="#" className="Body_2_Btn text-decoration-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.25em"
                                    viewBox="0 0 512 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                                support@plantpalace.com
                            </NavLink>
                        </li>
                        <li className="pt-3">
                            <NavLink to="#" className="Body_2_Btn text-decoration-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.25em"
                                    viewBox="0 0 384 512"
                                >
                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                                </svg>
                                +92335-257-3297
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="copyright pb-5">
                        <p>
                            Copyright © 2023
                            <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                            <NavLink to="index.html" className="Body_2_Btn text-decoration-none">
                                Plants Palace
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer