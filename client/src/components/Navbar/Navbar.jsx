import React from "react";
import "./Navbar.css";
import wishlist from "../../assets/Wishlist.svg";
import chart from "../../assets/Cart1.svg";
import searchIcon from "../../assets/search.svg";
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <b className="logoName">Exclusive</b>
        </div>

        <div className="links">
          <ul className="home">Home</ul>
          <ul className="contact">Contact</ul>
          <ul className="about">About</ul>
          <ul className="signUp">Sign Up</ul>
        </div>

        <div class="input-wrapper">
          <button class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#fff"
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#fff"
                d="M22 22L20 20"
              ></path>
            </svg>
          </button>
          <input placeholder="search.." class="input" name="text" type="text" />
        </div>

        <div className="icons">
          <img src={wishlist} alt="" />
          <img className="cart" src={chart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
