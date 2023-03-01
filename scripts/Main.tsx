import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {useElementSize} from "usehooks-ts";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    HashRouter,
    Link,
} from "react-router-dom";
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
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
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

const ShopItemsContainer = (props: any) => {
    return (
        <div className="shop-items-container">
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
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

const Router = createBrowserRouter([
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
        <HashRouter>
                <RouterProvider router={Router} />
        </HashRouter>
    </React.StrictMode>
);
