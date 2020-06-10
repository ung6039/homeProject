import React, {Fragment, useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {NavLink} from "react-router-dom";

/*
    useDispatch -> 데이터 요청

    // state를 받아옴
    useSelector -> 요청한 데이터 얻기

 */
export default function Home(props) {
    return (
        <div className="jumbotron text-center">
            <h1>편의점 끝판왕</h1>
        </div>
    )
}