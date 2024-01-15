import React, { useState, useEffect } from 'react'
import "./Home.css"
import "./add_to_cart.css"
import logo from "../assets/Plant_Palace_logo.png"
import products from "../components/data/Products.json"
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from './hooks/useAuth'
import Footer from './Footer'
const Shop = () => {

    const { setCartLength } = useAuth()
    const [filter, setFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, [])
    const addToCart = (id) => {
        var localValue = JSON.parse(localStorage.getItem("cartItems"));
        let getProduct = filteredProducts.find(element => element.id == id);

        if (localValue.length == 0) {

            localValue.push(getProduct)
            setCartItems(localValue)
            setCartLength((cart) => cart + 1);
        }
        else {
            let res = localValue.find(element => element.id == id);
            let getProduct = filteredProducts.find(element => element.id == id);

            if (res === undefined) {
                localValue.push(getProduct)
                setCartItems(localValue);
                setCartLength((cart) => cart + 1);



            }
        }
        console.log("cartItems", cartItems)
        console.log("local", localValue)
        localStorage.setItem('cartItems', JSON.stringify(localValue))

    }
    const handleSearch = (e) => {
        let query = e.target.value;
        setSearchQuery(query);
        console.log("query: " + query)
        const filtered = products.filter(product =>
            // product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
            product.title.toLowerCase().match(query.toLowerCase())
        );


        setFilteredProducts(filtered);

    }
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        // setfilterProducts(e.target.value)
        // Perform any filtering logic based on the selected option here
        if (e.target.value === "Alphabetical") {

            setFilteredProducts([...filteredProducts].sort((a, b) => a.title.localeCompare(b.title)))


        }
        else if (e.target.value == "Price") {

            setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));

        }
        else if (e.target.value == "products") {

            setFilteredProducts(filteredProducts);

        }
    };

    return (
        <>
            <>
                <section>
                    <div className="d-flex justify-content-center">
                        <input
                            type="text"

                            name=""
                            id="inputdata"
                            placeholder="Search Indoor Plants"
                            className="form-control justify-content-center mt-4 w-25 me-2"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <select
                            name=""
                            id="filter"
                            className="form-control justify-content-center mt-4"
                            style={{ width: "15vw" }}
                            option={filter}
                            onChange={handleFilterChange}
                        >
                            <option

                                className="form-control justify-content-center mt-4"
                                style={{ width: "15vw" }}
                            >
                                Filter
                            </option>

                            <option
                                value="Alphabetical"
                                className="form-control justify-content-center mt-4"
                                style={{ width: "15vw" }}
                            >
                                Filter By Name
                            </option>
                            <option
                                value="Price"
                                className="form-control justify-content-center mt-4"
                                style={{ width: "15vw" }}
                            >
                                Filter By Price
                            </option>
                            <option
                                value="products"
                                className="form-control justify-content-center mt-4"
                                style={{ width: "15vw" }}
                            >
                                Filter By Products
                            </option>
                        </select>
                    </div>
                    <span id="one">
                        <div className="mainContainer">
                            <div className="container cardContainer py-5" id="indoor">
                                {
                                    filteredProducts && filteredProducts.map((item, index) => (
                                        <div className="col-md-3 " data-aos="fade-up" data-aos-duration={2000} key={index}>
                                            <div className="card shadow card${i}">
                                                <div className="cardImage">
                                                    <img
                                                        src={item.img}
                                                        className="img-fluid justify-content-center"
                                                        style={{ width: "100vw", height: "27vh" }}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cardContent">
                                                    <h3>
                                                        {item.title}
                                                    </h3>
                                                    <p>
                                                        <span>$</span> {item.price}/-
                                                    </p>
                                                    <button
                                                        className="btn btn-success"
                                                        type="button"
                                                        onClick={() => addToCart(item.id)}
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                                {/* 
          
           <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="${items[i].img}" class="img-fluid justify-content-center" style="width:100vw; height:27vh;" alt="">
                    </div>
                    <div class="cardContent">
                        <h3>${items[i].title}</h3>
                        <p><span>$</span> ${items[i].price}/-</p>
                        <button class="btn btn-primary" type="button" onclick="addToCart('${i}')">add to cart</button>
                    </div>
                </div>
            </div>
          
           */}
                            </div>

                        </div>
                    </span>
                </section>
                {/* BODY 1 */}
                {/* FOOTER */}
                <Footer />
            </>

        </>
    )
}

export default Shop