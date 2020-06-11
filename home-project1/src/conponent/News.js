import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {FETCH_NEWS} from "../actions/types";
import axios from 'axios'
import {fetchenews} from "../actions/ConvinenceAction";

export default function FoodNews(props) {
    const dispatch= useDispatch();
    const [fd,setFd] = useState('편의점');
    console.log("dispatch확인 : (news)"+dispatch)
    useEffect(()=>{
        axios.get('http://localhost:3355/news',{
            params:{
                fd:fd
            }
        }).then((result)=>{
            dispatch({
                type:FETCH_NEWS,
                payload:result.data
            })
        })
    },[])
    const news_data = useSelector(state=>state.product.news)
    console.log(news_data)

    const onDataChange=(e)=>{
        setFd(e.target.value)
    }
    const onBtnClick=()=>{
        dispatch(fetchenews(fd))
    }
    const html= news_data.map((m)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td><a href={m.link} target={"_blank"}>{m.title}</a></td>
            </tr>
            <tr>
                <td style={{"color":"black"}}>{m.description}</td>
            </tr>
            <tr>
                <td className={"text-right"} style={{"color":"black"}}>{m.author}</td>
            </tr>
            </tbody>
        </table>
    )
    return(
        <div className={"jumbotron text-center"} style={{"margin":"0px auto","width":"900px"}}>
            <h1 className={"text-center"}>편의점 소식</h1>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>
                        <input type={"text"} className={"input-sm"} style={{"color":"black"}} size={"20"} onChange={onDataChange}/>
                        <button className={"btn btn-sm btm-primary"} style={{"color":"black"}} onClick={onBtnClick}>검색</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        {html}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
