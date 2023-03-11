import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {useElementSize} from "usehooks-ts";
import {
    createHashRouter,
    RouterProvider,
    Route,
    HashRouter,
    Link,
    json,
} from "react-router-dom";
import * as $ from 'jquery';
import AboutPage from "./About";
import ContactPage from "./Contact";

const desktopWidth: number = 1280;
const tabletWidth: number = 600;

const MainPage = (props: any) => {
    const [mainContainer, {width, height}] = useElementSize();
    const aboutIsVisible: boolean = (width >= desktopWidth) ? true : false;
    const footerIsVisible: boolean = (width < desktopWidth) ? true : false;

    return (
        <div ref={mainContainer} className="main-container">
            {aboutIsVisible && <AboutContainer />}
            <ShopContainer />
            {footerIsVisible && <Footer />}
        </div>
    )
}

const ShopContainer = (props: any) => {
    const [shopContainer, {width, height}] = useElementSize();
    const filterIsVisible: boolean = (width >= tabletWidth) ? true : false;
    return (
        <div ref={shopContainer} className="shop-container">
            <ShopBanner />
            <ShopItemsContainer />
            {filterIsVisible && <FilterContainer />}
        </div>
    )
}

const FilterContainer = (props: any) => {
    return (
        <div className="filter-container">
            <SearchBar />
            <FilterBar />
        </div>
    )
}

const SearchBar = (props: any) => {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input id="search-input" placeholder="Search"></input>
                <button>☌</button>
            </div>
        </div>
    )
}

const FilterBar = (props: any) => {
    return (
        <div className="filter-bar">
            <FilterItem />
        </div>
    )
}

const FilterItem = (props: any) => {
    return (
        <div className="filter-item">
            Item
        </div>
    )
}

const FilterButton = (props: any) => {
    return (
        <div className="filter-button">
        </div>
    )
}

const getProducts = async() => {
    const url = "https://api.stripe.com/v1/products";
    /*
    $.ajax({
        type: "GET",
        headers: {
            "Authorization": "Bearer " + sk_test
        },
        data: "active=true",
        url: ,
        dataType: "json",
        success: function(response) {
            console.log(response)
            console.log(response.data[0])
            for (let i = 0; i < response.data.length(); ++i) {
                const product = response[i];
                console.log(product);
            }
        }
    });
    let json = await((await fetch(url, {method: "GET", headers: {"Authorization": "Bearer " + sk_test}})).json());
    let products = json.data;
    for (let product in products) {
        console.log(product)
    }
    const {get} = require("child_processs")
    const b = get("python", ["../stripeCode.py"])
    console.log(b)
    */

    $.ajax({
        type: "POST",
        url: "../back/stripeCode.py",
        }).done(function(data) {
            console.log(data)
        });
}

const ShopItemsContainer = (props: any) => {
    const [jsonProducts, setJsonProducts] = useState<[]>([]);
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        getProducts();
    },
    []); //the empty array causes this useEffect to only execute once

    return (
        <div className="shop-items-container">
            <ShopItem />
        </div>
    )
}

const ShopItem = (props: any) => {
    return (
        <div className="shop-item">
            <img className="placeholder-img" src="http://placekitten.com/400/400"></img>
            <h3>Product name</h3>
            <p>$49.95</p>
        </div>
    )
}

const ShopBanner = (props: any) => {
    return (
        <div className="shop-banner">
            <h1>The Arts of Yo-Yo</h1>
        </div>
    )
}

const AboutContainer = (props: any) => {
    return (
        <div className="about-container">
            <div className="about">
                <img className="yo-portrait" src="http://placekitten.com/200/200"></img>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis sint ab repellat omnis temporibus expedita culpa non asperiores, consectetur officiis quos inventore qui officia quae alias esse repellendus tempora?</div>
                <Link to="contact" className="router-link">
                    <button className="button">Contact Me!</button>
                </Link>
                <button className="button">Share My Store!</button>
            </div>
        </div>
    )
}

const Footer = (props: any) => {
    return (
        <div className="footer">
            <Link to="about" className="router-link">
                <button className="button">About</button>
            </Link>
            <Link to="contact" className="router-link">
                <button className="button">Contact</button>
            </Link>
            <button className="button">Share</button>
        </div>
    )
}

//TODO: switch back to createBrowserRouter once this is no longer being hosted on github pages
const Router = createHashRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    }
])


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
);
