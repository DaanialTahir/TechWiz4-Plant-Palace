import React from 'react'
import "./Home.css";

const Hero = () => {
    return (
        <div className="hero vh-100 d-flex align-items-center" id="about">
            <div className="container ">
                <div className="row" data-aos="fade-up" data-aos-duration={3000}>
                    <div className="col-lg-12 col-md-6">
                        <h1 className="display-4 text-white fw-bold">
                            Welcome to
                            <span className="badge bg-light text-success ">Plant Palace</span>
                            Your Green Haven of Botanical Wonders!
                        </h1>
                        <p className="text-white my-3 lead">
                            At PlantPalace, we're on a mission to bring the enchanting world of
                            plants closer to you. Whether you're an experienced gardener, a
                            budding plant parent, or simply someone who appreciates the beauty of
                            nature, you've found your digital sanctuary right here.
                        </p>
                        <p className="text-white my-2 lead">
                            Step into a realm where leaves dance with sunlight, blooms paint a
                            canvas of colors, and every plant has a story to tell. Our passion for
                            plants is boundless, and we've curated a botanical oasis where
                            knowledge and inspiration intertwine.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero