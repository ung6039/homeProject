import {FETCH_EMART24, FETCH_CU, FETCH_GS25, FETCH_NEWS, FETCH_TOTAL, FETCH_DETAIL} from "../actions/types";

const initialState={
    gs25:[],
    cu:[],
    emart24:[],
    board:[],
    news:[],
    total:[],
    detail:{}
}
export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_EMART24:
            return{
                ...state,
                emart24: action.payload
            }
        case FETCH_CU:
            return{
                ...state,
                cu:action.payload
            }
        case FETCH_GS25:
            return {
                ...state,
                gs25: action.payload
            }
        case FETCH_TOTAL:
            return {
                ...state,
                total:action.payload
            }
        case FETCH_DETAIL:
            return {
                ...state,
                detail:action.payload
            }
        default:
            return state
    }
}