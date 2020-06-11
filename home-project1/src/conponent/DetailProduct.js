import React,{useEffect,useState,Fragment} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {FETCH_DETAIL} from "../actions/types";

import {fetchdetail} from "../actions/ConvinenceAction";

export default function DetailProduct(props){
    console.log(props.match.params.no)
    const dispatch = useDispatch()
    useEffect(()=>{
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

    const detail_data = useSelector(state=> state.product.detail)

    //console.log(detail_data.store)

    return(
        <Fragment>
        <div class={"jumbotron text-center"}>
            <h1>{detail_data.store}</h1>
        </div>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td><h3>{detail_data.store}</h3></td>
                </tr>
                <tr>
                    <td width={"30%"} rowSpan={"5"} className={"text-center"}>
                        <img src={detail_data.image} width={"100%"}/>
                    </td>
                    <td style={{"color":"orange"}} width={"70%"}><strong>{detail_data.title}</strong></td>
                </tr>
                <tr>
                    <td style={{"color":"red"}}><strong>event : {detail_data.event}</strong></td>
                </tr>
                <tr>
                    <td><strong>가격 : {detail_data.price}원</strong></td>
                </tr>
                <tr>
                    <td><strong>브랜드 : {detail_data.brand}</strong></td>
                </tr>
                <tr>
                    <td><strong>{detail_data.cate}</strong></td>
                </tr>
                </tbody>
            </table>

        </Fragment>
    )
}