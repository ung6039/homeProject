/*
FETCH_TOTAL ='FETCH_TOTAL'
export const FETCH_NEWS ='FETCH_NEWS'
export const FETCH_GS25 ='FETCH_GS25'
export const FETCH_CU = 'FETCH_CU'
export const FETCH_EMART24
 */
import {FETCH_GS25, FETCH_NEWS,FETCH_BOARD} from "./types";
import {FETCH_CU} from "./types";
import {FETCH_EMART24} from "./types";
import axios from 'axios'

export function fetchgs25(){
    return function(dispatch){
        console.log("action : "+dispatch)
        axios.get("http://localhost:3355/gs25",{

        }).then(gs25=> dispatch({
            type:FETCH_GS25,
            payload:gs25.data
        }))
    }
}
export function fetchcu(){
    return function(dispatch){
        console.log("action : "+dispatch)
        axios.get("http://localhost:3355/cu",{

        }).then(cu => dispatch({
            type:FETCH_CU,
            payload:cu.data
        }))
    }
}
export function fetchemart24() {
    return function(dispatch){
        console.log("action "+dispatch)
        axios.get("http://localhost:3355/emart24",{

        }).then(emart24=>dispatch({
            type:FETCH_EMART24,
            payload:emart24.data
        }))
    }
}
export function fetchenews() {
    return function(dispatch){
        console.log("action "+dispatch)
        axios.get("http://localhost:3355/news",{

        }).then(news=>dispatch({
            type:FETCH_NEWS,
            payload:news.data
        }))
    }
}

export function fetchboard() {
    return function(dispatch){
        console.log("action "+dispatch)
        axios.get("http://localhost:3355/board",{

        }).then(board=>dispatch({
            type:FETCH_BOARD,
            payload:board.data
        }))
    }
}