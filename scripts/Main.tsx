import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {useElementSize} from "usehooks-ts";

const desktopWidth: number = 1280;
const tabletWidth: number = 600;

const MainContainer = (props: any) => {
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
                <div>Lorem ipsum dolor sit amet consectetur adipisicing SSaepe, optio dolorum! aepe, optio dolorum! Totam minima Saepe, optio dolorum! Totam minima Saepe, optio dolorum! Totam minconsectetur adipisicing elit. SSaepe, optio dolorum! ima Saepe, optio dolorum! Totam minima aepe, optio dolorum! Totam minima voluptatibus, magnam libero amet omnis excepturi animi id officiis natus. Necessitatibus ratione libero quae ipsam quibusdam perspiciatis.</div>
                <button className="button">Contact Me!</button>
                <button className="button">Share My Store!</button>
            </div>
        </div>
    )
}

const Footer = (props: any) => {
    return (
        <div className="footer">
            <button className="button">About</button>
            <button className="button">Contact</button>
            <button className="button">Share</button>
        </div>
    )
}


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainContainer />
    </React.StrictMode>
);
