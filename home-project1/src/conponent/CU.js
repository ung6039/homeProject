import {fetchcu} from "../actions/ConvinenceAction";
import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";

export default function CU(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchcu())
     }, [])
    const cu_data = useSelector(state => state.product.cu)
    const html = cu_data.map((m) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.image} alt="Lights" style={{"width": "100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                    <p>{m.price}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"} style={{"margin": "0px auto", "width": "900px"}}>
            <h1 className={"text-center"}>CU</h1>
            {html}
        </div>

    )
}