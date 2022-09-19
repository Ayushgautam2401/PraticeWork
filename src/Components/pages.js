import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/PostActions";
import { getPageState } from "../redux/Selector/Selector";

function Pages() {
  const [currentPage,setCurrentPage]=useState(1);
  // const [records,setRecords]=useState([]);
  const dispatch = useDispatch();
  const pageState = useSelector(getPageState(currentPage));
  useEffect(()=>{
    dispatch(getPosts(currentPage))
  },[currentPage])
  return (
        <div >
      {}
        <button onClick={()=>{
          setCurrentPage((prev)=>prev-1 < 0 ? 1 : prev-1);
        }}>prev</button>
        <button onClick={()=>{
          setCurrentPage((prev)=>prev+1);
        }}>next</button>
      </div>
  );
}

export default Pages;
