import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {FETCH_DETAIL} from "../actions/types";
import {fetchdetail} from "../actions/ConvinenceAction";

export default function DetailProduct(props){
    console.log(props.match.params.no)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log("detail2")
        axios.get('http://localhost:3355/detail',{
            params:{
                no: props.match.params.no
            }
        }).then((details)=>{
            dispatch({
                type:FETCH_DETAIL,
                payload:details.data
            })
        })
    },[])

    const detail_data = useSelector(state => state.product.detail)
    console.log(detail_data)
    const html = detail_data.map((m)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td><h5>{m.store}</h5></td>
            </tr>
            <tr>
                <td width={"30%"} rowSpan={"3"} className={"text-center"}>
                    <img src={m.image} width={"100%"}/>
                </td>
                <td width={"70%"}>{m.title}<span style={{"color":"orange"}}>{m.score}</span></td>
            </tr>
            <tr>
                <td>가격:{m.price}</td>
                <td>브랜드 : {m.brand}</td>
                <td>카테고리 : {m.cate}</td>
                <td style={{"color":"red"}}>event : {m.event}</td>
            </tr>
            </tbody>
        </table>
    )

    return(
        <div class={"jumbotron text-center"}>
            <h1>제품 상세</h1>
            {html}
        </div>
    )
}