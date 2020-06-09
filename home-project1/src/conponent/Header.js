import React,{useEffect,useState,Fragment} from "react";
import {NavLink} from "react-router-dom";

function Header() {

    return(
        <Fragment>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to={"/"}>편의점</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink exact  to={"/"}>전체</NavLink></li>
                            <li><NavLink to={"/emart24"}>이마트24</NavLink></li>
                            <li><NavLink to={"/cu"}>CU</NavLink></li>
                            <li><NavLink to={"/gs25"}>GS25</NavLink></li>
                            <li><NavLink to={"/news"}>편의점 톡톡</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="jumbotron text-center">
                <h1>편의점 정복</h1>
            </div>
        </Fragment>
    )
}
export  default Header;
