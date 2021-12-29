import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Search from "@material-ui/icons/Search"
import DragHandleIcon from "@material-ui/icons/DragHandle";

const Hero = () => {
  return (
    <div className="region">
      <div className="hero">
        <div className={`nav`}>
          <div className="nav-left">
            <p>Skin Care</p>
            <p>Body and Hand</p>
            <p>Hair</p>
            <p>Fragrance</p>
            <p>Home</p>
            <p>Kits and Travel</p>
            <p>Gifts</p>
            <p>Read</p>
            <p>Stores</p>
            <Search />
          </div>
          <div className="nav-right">
            <p>Login</p>
            <p>Cart</p>
          </div>
        </div>
        <div className={`mob-nav`}>
          <div className="nav-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
              alt=""
            />
          </div>
          <div className="nav-right">
            <Search />
            <p>Cart</p>
            <DragHandleIcon />
          </div>
        </div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
            alt=""
          />
        </div>
        <section className="section1">
          <div className="hero-text">
            <h1>Gift selection, simplified</h1>
            <p>
              Bring joy to deserving recipients of all stripes with a carefully curated selection of formulations for the skin, body and home.
            </p>
            <Button variant="outlined">
              <span className="btn-hero">Browse all gifts</span>
              <ArrowForwardIcon />
            </Button>
          </div>

          <img src="aesop1.png" className="img1" />

        </section>
      </div>
      <div className="mob-hero-text">
        <h1>Gift selection, simplified</h1>
        <p>
          Bring joy to deserving recipients of all stripes with a carefully curated selection of formulations for the skin, body and home.
        </p>
        <Button variant="outlined">
          <span className="btn-hero">Browse all gifts</span>
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
