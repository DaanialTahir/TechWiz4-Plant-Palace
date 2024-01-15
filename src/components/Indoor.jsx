import React, {useState} from 'react'
import IndoorData from "../components/data/Indoor.json"
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import Flowering from './Flowering';
import Footer from './Footer';

const Indoor = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(IndoorData);
    const navigate = useNavigate();
    const handleClick = (data) => {
        navigate("/readMore", { state: data })
    }
    const handleSearch = (e) => {
        let query = e.target.value;
        setSearchQuery(query);
        console.log("query: " + query)
        const filtered = IndoorData.filter(product =>
            // product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
            product.title.toLowerCase().match(query.toLowerCase())
        );


        setFilteredProducts(filtered);

    }
    return (
        <>
            <section>
                <div className="container" id="plants">
                    <div className="row">
                        <div className="col-lg-12 ">
                        <input
                            type="text"

                            name=""
                            id="inputdata"
                            placeholder="Search"
                            className="form-control justify-content-center mt-4 w-25 me-2"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                            <h1
                                className="text-center display-5 mb-4 py-4 fw-bold text-uppercase"
                                id="indoorHeading"
                                style={{ color: "#198754" }}
                            >
                                Indoor Plants
                            </h1>
                            <span id="one">
                                <div className="row" id="indoor">
                                    {
                                        filteredProducts && filteredProducts.map((data, index) => (
                                            <div className="col-lg-3 col-md-4 mb-4" key={index}>
                                                <div className="card mb-3" id="mycard">
                                                    <img
                                                        src={data.img}
                                                        className="img-fluid justify-content-center"
                                                        style={{ height: "27vh" }}
                                                        alt=""
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {data.title}
                                                        </h5>
                                                        <h3>
                                                            {data.price}
                                                        </h3>
                                                        <button type="button"
                                                        className="btn btn-success"

                                                        onClick={() => handleClick(data)}>
                                                        Read More
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>


                                        ))
                                    }

                                </div>
                            </span>
                            <hr style={{ marginBottom: 20, marginTop: 20 }} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Indoor