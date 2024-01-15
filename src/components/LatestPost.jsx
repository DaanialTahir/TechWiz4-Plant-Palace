import React, { useEffect } from 'react'

import "./Home.css"
import PostData from "../components/data/Post.json"
import { NavLink } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
const LatestPost = () => {
    useEffect(() => {
      
        AOS.init();
        AOS.refresh();
    
    }, [])

    console.log(PostData)
    return (
        <div className="container-fluid px-md-5 pb-md-5 bg-light">
            <div className="row px-5 pt-5">
                <div className="col-lg-12 text-center">
                    <h1
                        className="fw-bold display-5 text-uppercase"
                        style={{ color: "#198754" }}
                    >
                        Our Latest Posts
                    </h1>
                </div>
            </div>
            <div
                id="card"
                className="row p-lg-5"
                data-aos="fade-up"
                data-aos-duration={2000}
            >
                {/* card */}
                {
                    PostData && PostData.map((post, index) => (

                        <div className="col-lg-4" key={index}>
                            <div className="card border-0 bg-light mb-4">
                                <img src={post.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {post.title}
                                    </h5>
                                    <h5 className="card-text">{post.text}</h5>
                                    <p className="descripion">
                                        {
                                         console.log(post.description)   
                                        }
                                    </p>
                                    <h6 className="card-title text-muted fw-bold">
                                        <NavLink to="/recentPost" className="Body_4_Btn">
                                            Continue Reading <i className="fas fa-arrow-right" />
                                        </NavLink>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>

        </div>

    )
}

export default LatestPost