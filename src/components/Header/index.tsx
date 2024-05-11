import React from "react";

import Notification from "@/components/Header/Notification";
import SearchBar from "@/components/Header/SearchBar";

import "@/components/Header/index.scss";

const Header = () => {
    return (
        <header>
            <SearchBar />
            <Notification />
        </header>
    );
}

export default Header;