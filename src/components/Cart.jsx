import React, { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import logo from "../assets/Plant_Palace_logo.png"
import Footer from './Footer'

const Cart = () => {
const {setCartLength} = useAuth()

    let cartProduct = JSON.parse(localStorage.getItem("cartItems"))
    const [cartData, setcartData] = useState(cartProduct)

    const removeItem = (id) => {
        const newList = cartProduct.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(newList))
        setcartData(newList)
        setCartLength((data) => data-1)
    }
    return (
        <>
            <div>
                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="h4 mt-5 text-center">Shopping Cart</p>
                                {
                                    cartData.length == 0 ? <p>Your Cart is Empty</p> : <table id="shoppingCart" className="table table-condensed table-responsive">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '50%' }}>Product</th>
                                                <th style={{ width: '15%' }}>Price</th>
                                                <th style={{ width: '15%' }}>Remove</th>
                                                <th style={{ width: '20%' }} />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartData && cartData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td data-th="Product">
                                                            <div className="row">
                                                                <div className="col-md-3 text-center">
                                                                    <img src={item.img} alt="Product Image" className="img-fluid rounded shadow" />
                                                                </div>
                                                                <div className="col-md-9 text-left mt-sm-2">
                                                                    <h4>{item.title}</h4>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-th="Price">{item.price}</td>

                                                        <td className="actions" data-th="Remove">
                                                            <div className="text-right">

                                                                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Delete</button>
                                                                {/* <i className="" onClick={() => removeItem(item.id)} /> */}

                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                }

                            </div>
                        </div>
                    </div>
                </section>
               <Footer />
            </div>
        </>
    )
}

export default Cart