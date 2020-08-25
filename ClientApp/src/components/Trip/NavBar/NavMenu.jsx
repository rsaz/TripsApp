import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuth0 } from "../../../auth0-wrapper";
import "./NavMenu.scss";

const NavMenu = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Menu>
            {isAuthenticated ? (
                <button className="btn btn-danger" onClick={() => logout()}>
                    Logout
                </button>
            ) : (
                <button
                    className="btn btn-outline-success"
                    onClick={() => loginWithRedirect()}
                >
                    Login
                </button>
            )}
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/burgers">
                Burgers
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
        </Menu>
    );
};

export default NavMenu;
