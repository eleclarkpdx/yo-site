import React, { useState } from "react";
import {Link} from "react-router-dom";

export const ContactPage = (props: any) => {
    return (
        <div id="contact-background">
            <div className="simple-info-box">
                <h1>Contact</h1>
                <p>Phone: XXX-XXX-XXXX</p>
                <p>Email: xx@xxx.com</p>
                <p>[Insert social media site here]</p>
                <Link to="/" className="router-link">
                    <button>Return to the shop</button> 
                </Link>
            </div>
        </div>
    )
}

export default ContactPage;
