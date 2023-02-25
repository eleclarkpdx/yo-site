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
            <ShopBanner />
            {aboutIsVisible && <AboutContainer />}
            <FilterContainer />
            <ShopContainer />
            {footerIsVisible && <Footer />}
        </div>
    )
}

const ShopContainer = (props: any) => {
    return (
        <div className="shop-container">
            <ShopItemsContainer />
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
        <div className="search-bar">

        </div>
    )
}

const FilterBar = (props: any) => {
    return (
        <div className="filter-bar">

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

        </div>
    )
}

const Footer = (props: any) => {
    return (
        <div className="footer">

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
