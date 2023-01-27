import React,{useEffect, useState} from 'react';
import "./style.scss";
import FilterIcon from "../../assets/img/filter.png";
import requestResult from "../../shares/agent";
import { useDispatch , useSelector} from 'react-redux';
import {startApp} from "../../Redux/action"
import { useLocation } from 'react-router-dom';



const Filter = () => {

    const dispatch = useDispatch();
    const location  = useLocation();
    const resultFilter = useSelector((state:any) => state.card?.resultNum);
    

    const [showFilter , SetShowFilter] = useState(false)
    const [dataFilter , setDataFilter] = useState({
        typeF : "",
        dateF:null,
    })

    const handelFilter =()=>{
        SetShowFilter(!showFilter)
    }

    const filterData = (e) => {

        // const newDate = new Date();
        const todayDate = new Date(), weekDate = new Date();
        const lastWeek = weekDate.setTime(todayDate.getTime()-(7*24*3600000));
        const lastDay = weekDate.setTime(todayDate.getTime()-(1*24*3600000));
        const lastMonth = weekDate.setTime(todayDate.getTime()-(30*24*3600000));

        if(e.target.name === "dateF"){

            if(e.target.value === "lastToday"){
                console.log("lastDay" , lastDay)
                setDataFilter({
                    ...dataFilter,
                    [e.target.name] : lastDay
                 })

            }if (e.target.value === "lastWeek") {
                console.log("lastWeek" , lastWeek)
                setDataFilter({
                    ...dataFilter,
                    [e.target.name] : lastWeek
                 })
                
            } if (e.target.value === "lastMonth") {
                console.log("lastMonth" , lastMonth)
                setDataFilter({
                    ...dataFilter,
                    [e.target.name] : lastMonth
                 })
            } 
     
        }else{
            setDataFilter({
                ...dataFilter,
                [e.target.name] : e.target.value
             })
        }

        


    }

    useEffect(()=>{
        if(dataFilter){
            dispatch<any>(requestResult(startApp,location.search.split("=")[1] ,dataFilter ))
        }
    },[dataFilter ])


  return (
    <div className="filter">
        <div className="filter_result">
            <span>About {resultFilter && resultFilter} filtered results</span>
        </div>
        <div className="filter_option">
            <div className="filter_icon" onClick={handelFilter}>
                <img src={FilterIcon} alt="" />
            </div>
            {
                showFilter && (
                    <>
                        <div className="form-group">
                            <select name="dateF" onChange={filterData} >
                                <option value="lastToday">Last Today</option>
                                <option value="lastWeek">Last Week</option>
                                <option value="lastMonth">Last Month</option>
                            </select>
                            </div>

                            <div className="form-group">
                            <select name="typeF" onChange={filterData} >
                                <option value="video">Video</option>
                                <option value="channel">Channel</option>
                                <option value="playlist">Playlist</option>
                            </select>
                        </div>
                    </>
                ) 
            }

        </div>
    </div>
  )
}

export default Filter