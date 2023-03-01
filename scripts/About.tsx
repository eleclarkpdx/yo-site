import React, { useState } from "react";
import {Link} from "react-router-dom";

export const AboutPage = (props: any) => {
    return (
        <div id="about-background">
            <div className="simple-info-box">
                <h1>About Page</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ipsa quia deleniti consectetur fugit recusandae accusantium numquam! Similique eligendi atque ipsum corporis quibusdam, a eum, minima dolore quae placeat illo?</p>
                <Link to="/" className="router-link">
                    <button>Return to the shop</button> 
                </Link>
            </div>
        </div>
    )
}

export default AboutPage;