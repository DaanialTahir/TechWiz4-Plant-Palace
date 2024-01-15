import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from './Footer';
import { useAuth } from './hooks/useAuth'

const ReadMore = () => {
  const { state } = useLocation();
  const { cartLength, setCartLength } = useAuth()

  console.log(state)
  const addToCart = (id) => {

    var localValue = JSON.parse(localStorage.getItem("cartItems"));
    // let getProduct = filteredProducts.find(element => element.id == id);

    if (localValue.length == 0) {

        localValue.push(state)
        // setCartItems(localValue)
         setCartLength((cart) => cart + 1);
    }
    else {
        let res = localValue.find(element => element.id == id);
        // let getProduct = filteredProducts.find(element => element.id == id);

        if (res === undefined) {
            localValue.push(state)
            // setCartItems(localValue);
             setCartLength((cart) => cart + 1);



            // localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
    }
   
    localStorage.setItem('cartItems', JSON.stringify(localValue))

}
  return (
    <>
      <div className="container mb-5" >
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="">
              <div className="row " style={{ marginTop: "100px" }}>
                <div className="col-md-6" >
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      <img
                        id="main-image"
                        src={state.img}
                        width={250}
                      />{" "}
                    </div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">

                    <div className="mt-4 mb-3">
                      {" "}
                      <span className="text-uppercase text-muted brand">  </span>
                      <h5 className="text-uppercase">{state.title}</h5>
                      <h5 className="text-uppercase">{state.price}</h5>
                      <h5 className="text-uppercase">{state.scientific_name}</h5>

                      <div className="price d-flex flex-row align-items-center">

                      </div>
                    </div>
                    <p className="about">
                      {state.watering}
                    </p>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() => addToCart(state.id)}
                    >
                      Add to cart
                    </button>

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

export default ReadMore