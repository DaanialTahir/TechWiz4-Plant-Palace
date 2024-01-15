import React, { useEffect } from 'react'

import "./Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
const Content = () => {
    
        useEffect(() => {
      
          AOS.init();
          AOS.refresh();
      
      }, [])
    return (
        <div className="container-fluid px-md-5 pt-md-5 pb-1 Body_All">
            <div className="row p-md-5">
                <div className="col-lg-12" data-aos="fade-up" data-aos-duration={2000}>
                    <p className="text-center fs-2 fw-bold pt-5 text-success text-uppercase">
                        Bringing Nature Home: Your Ultimate Plant Paradise!
                    </p>
                </div>
                <div className="col-lg-12" data-aos="fade-up" data-aos-duration={2000}>
                    <p className="text-center fw-bold pt-5">
                        Welcome to Plant Palace, your global botanical emporium! Delight in our
                        vast collection of plants, spanning lush tropicals, elegant succulents,
                        vibrant flowers, and majestic trees.
                    </p>
                    <p className="text-center fw-bold">
                        With a commitment to greening your space, we offer a diverse range of
                        flora to suit every level of expertise. Whether you're a seasoned
                        gardener or a budding enthusiast, our carefully curated selection
                        ensures you'll find the perfect green companion. Immerse yourself in a
                        world of horticultural splendor as we deliver nature's beauty directly
                        to your doorstep, no matter where you are. Embark on a journey of growth
                        and discovery with Plant Palace today!
                    </p>
                </div>
            </div>
            <hr style={{ color: "darkgreen" }} />
        </div>


    )
}

export default Content