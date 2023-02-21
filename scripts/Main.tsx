import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import * as usehooks from "usehooks-ts";

const MainContainer = (props: any) => {
    return (
        <div className="main-container">
            <ShopContainer />
            <AboutContainer />
        </div>
    )
}

const ShopContainer = (props: any) => {
    return (
        <div className="shop-container">
            <ShopBanner />
            <FilterContainer />
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
        </div>
    )
}

const AboutContainer = (props: any) => {
    return (
        <div className="about-container">

        </div>
    )
}

const AboutFooter = (props: any) => {
    return (
        <div className="about-footer">

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
