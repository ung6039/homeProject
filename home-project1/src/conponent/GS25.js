import {FETCH_GS25} from "../actions/types";
import Fragment from "react"
import {fetchgs25} from "../actions/ConvinenceAction"
import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";

export default function GS25(props) {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchgs25())
    },[])
    const gs25_data = useSelector(state=>state.product.gs25)
    const html=gs25_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.image} alt="Lights" style={{"width":"100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                    <p>{m.price}</p>
                </div>

            </div>
        </div>
    )
    return (


        <div className={"row"} style={{"margin":"0px auto","width":"900px"}}>
                <h1 className={"text-center"}>GS25</h1>
            {html}
        </div>

    )
}