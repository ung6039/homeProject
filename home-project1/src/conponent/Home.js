import React, {Fragment, useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchboard, fetchTotal} from '../actions/ConvinenceAction'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import {FETCH_BOARD, FETCH_TOTAL} from "../actions/types";

export default function Home(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
           dispatch(fetchTotal())
    },[])
    const total_data = useSelector(state => state.product.total)
    console.log(total_data)
    const html =total_data.map((m)=>
        <div className="col-md-3">
            <div className="panel panel-success">
                <div className="panel-heading">
                    {m.store} <br/>
                    {m.title}
                    <br/>
                    <sub>가격 : {m.price}</sub>

                </div>
                <div className="panel-body">
                    <div className="thumbnail">
                        <NavLink to={"/detail/"+m.no}>
                            <img src={m.image} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className="jumbotron text-center">
            <h1>편의점 끝판왕</h1>
            {html}
        </div>
    )
}