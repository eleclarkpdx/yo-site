import React, { useState } from "react";
import ReactDOM from "react-dom/client";

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
        <div className="filter-container">

        </div>
    )
}

const FilterBar = (props: any) => {
    return (
        <div className="filter-bar">

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


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainContainer />
    </React.StrictMode>
);
