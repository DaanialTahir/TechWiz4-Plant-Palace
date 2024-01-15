import React, { useEffect, useState } from 'react'
import "./Home.css"
import $ from 'jquery';
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/Plant_Palace_logo.png"
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useAuth } from './hooks/useAuth'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {

  const { cartLength, setCartLength } = useAuth()

  const [cartLength2, setcartLength2] = useState("0")
  const jqueryCode = () => {
    $(document).ready(function () {
      var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');

      docEl.on('scroll', function () {
        if (docEl.scrollTop() > 60) {
          headerEl.addClass('fixed-to-top');
          headerWrapEl.addClass('fixed-to-top');
          navEl.addClass('fixed-to-top');
        }
        else {
          headerEl.removeClass('fixed-to-top');
          headerWrapEl.removeClass('fixed-to-top');
          navEl.removeClass('fixed-to-top');
        }
      });

      linkScroll.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
          scrollTop: $(this.hash).offset().top
        }, 500);
      });
    });
  }
  useEffect(() => {
    jqueryCode()

  }, [])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cartItems"))

    if (data) {
      setcartLength2(data.length)

    }
  }, [JSON.parse(localStorage.getItem("cartItems"))])

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light wrapHead">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" id="brand">
            <img
              src={logo}
              className="img-fluid logo"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4 my-auto">
                <NavLink aria-colspan="scroll nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4 my-auto">
                <NavLink aria-colspan="scroll nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown me-4 my-auto">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/flower">
                      Flowering Shrubs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/indoor">
                      Indoor Plants
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/suclent">
                      Succulent Plants
                    </NavLink>
                  </li>

                </ul>
              </li>
              <li className="nav-item me-4 my-auto">
                <NavLink aria-colspan="scroll nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item me-4 my-auto">
                <NavLink aria-colspan="scroll nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item me-4 my-auto">
                <NavLink aria-colspan="scroll nav-link" to="/cart">
                  <Badge badgeContent={cartLength2} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge>

                </NavLink>
              </li>
              {/* <li className="nav-item me-4 my-auto">
                <NavLink href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar